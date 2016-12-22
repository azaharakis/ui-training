### vars
Javascript is a dynamic language. Assigning a variable a certain value will define its type
```js
var foo = 'hello' | Type string
var bar = 5 | Type number
```

### Hoisting
Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top
```js
bla = 2
var bla;
// ...

// is implicitly understood as:

var bla;
bla = 2;
```

### let
let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block
scope.

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

Simply speaking when to use let
- Any time you need to mutate (change|update) values.
- loops such as for loops defining i

### const
Const are blocked scoped variables similar to let, the difference here is that they may not be reassigned, doing so will
result in a syntax error.

Simply speaking when to use const
- By default