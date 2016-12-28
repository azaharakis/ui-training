### [Templated Strings](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)

```js
`string text`

`string
text
I can put what ever I want and preserve line breaks
`
```

Template literals are enclosed by the back-tick (\` \`) (grave accent) character instead of double or single quotes.

```js
const myVar = 'world'

`hello ${myVar}`
```

You'll see this often in react to apply classNames to components dynamically.

