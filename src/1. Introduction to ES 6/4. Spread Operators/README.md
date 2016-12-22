### [Spread Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)

You'll often see syntax that looks like this:
```js
const first = {
    a: 'b',
    b: 'c',
};
const obj = {
    d: 'f',
    ...first
}

console.log(obj);
/*
{
    a: 'b',
    b: 'c',
    d: 'f',
}
*/
```
This is called object spread and it's a nice way to create new objects from other objects without mutation.

You'll see this often in react as its common practice to create new objects when passing props to react components.

### Spreading into functions (Arrays)

The same can be done with Arrays
```js
const first = [1,2]
const newArray = [...first, 3,4]

console.log(new);
/* 1,2,3,4 */
```

And into functions

```js
const myArray = [1,2,3,4];
function myFunc(a,b,c,d){
    console.log(a,b,c,d);
}
myFunc(...myArray);
// 1,2,3,4
```