It's not too tricky to write css, what is tricky is to write it at scale.
As projects continue to grow, if a strategy hasn't been put in place, it's 
easy for things to become unmanageable.

### Problem area's 
- #### global scope of css
Because css selectors are global naming elements can become challenging particularly the more there are.

- #### Dealing with the cascade
```css
body .wrapper .container .widget .button {
    background: blue;
} 
```
A contrived example but none the less illustrates the point of what is possible. Often when a deep
level of nesting occurs it becomes difficult to justify the developers original intent, and makes it tricky 
to apply any refactoring.

- #### Overriding and adding additional css
As projects under go changes through designs changes, it's often a common trap 
to override previous css with additional rules or just recreate the same rules.
 ```css
 .header-nav-container .header-nav-list {
     float: left;
 }
 
 .CA .header-nav-list.second {
     float: left;
 }
 
 #nav.challenger-a .submenu-3col li,
 #nav.challenger-a .submenu-3col li {
     float: left;
 }
 ```
 A symptom of the fact the new developer isn't sure what the css currently effects 

- #### Not testable 
There are'nt many good techniques available for testing css at the moment, 
coupled with the above problems it's often 


### Solving these problems
#### [BEM](http://getbem.com/faq/)
BEM is a naming convention that forces the developer to think about the component. it stands for
- Block (Standalone entity that is meaningful on its own)
- Element (Parts of a block and have no standalone meaning. They are semantically tied to its block.)
- Modifier (Flags on blocks or elements. Use them to change appearance or behavior.)

It attempts to solve some of the challenges with CSS through:
- limiting Nesting css classes through a naming conventions
- Make it clearer what css is on an element via its class name

#### Scoping to Modules
[CSS Modules](https://github.com/css-modules/css-modules)
If we had a way to scope css using the same techniques we use to define javascript dependencies  
a lot of the above problems also start to become easy to solve, through good practice. (i.e)
```css
/* styles.css */
.button{
    background:red;
    border:solid 2px maroon;
    border-radius:5px;
}
```

```js
//button.js
import styles from "./style.css";

export default () => (
    <button className={styles.button}>I am a button</button>
);

// <button class="button_xzy_generated_unique_hash">I am a button</button> 
```  
- class name's are guaranteed not to clash with other css modules defining the same class due to the generated hash which eliminates the need for:
    - nesting css selectors 
    - creating contrived name spaced classes `.iproperty-button .third-party-button`
    - Make css dependencies traceable, via a dependency tree. Refactoring css becomes predictable.
    - Become easier to reason about css through intelligent file scoping, smaller css modules

