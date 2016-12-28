## Stateless components

Creating a react component is as simple as:
```js
// Define the Component
const MyComponent = (props) => {
    return (
        <h1>
            {props.heading}
        </h1>
    ):
}
// Create an instance of the above definition like:
<MyComponent heading="hello world" />
<MyComponent heading="hello world 2" />

// Render into the dom using React.render, which takes a component, and a DOM Node to render into.
ReactDOM.render(<MyComponent heading="hello world" />, document.getElementById("wrapper"));
```
You'll noticed that we declared a html element in javascript. This is a DSL introduced called JSX to make working with react easier.
Simply think of it as calling a function, `<MyComponent heading="hello world" /> is the equivalent of
```js
React.createElement(
  h1,
  {heading: 'hello world'}
)
```
It may seem odd at first but it becomes easier to visualize complex component tree's when expressed using JSX

#### Things to note
- Components must return one component you cannot do things like
```js
const MyComponent = (props) => {
    return (
        <h1> {props.heading} </h1>
        <h1> {props.heading2} </h1>
    ):
}
```
- Using brackets `{}` between JSX tags executes javascript otherwise a string of text will just represent a text node.
`<div>{myVariable}</div>` myVariable is a variable `<div>myVariable</div>` myVariable is text
- When creating a stateless component you need to import React, as it's required to apply the JSX transformation
- Components can call other components
```js
const MyTitle = (props) => (
    <h1>{props.title}</h1>
);
const ContentComponent = (
    <div>
        <MyTitle title="Hello world" />
        This is the main content of this component
    </div>
);
React.render(<ContentComponent />, document.getElementById("wrapper"));
```
