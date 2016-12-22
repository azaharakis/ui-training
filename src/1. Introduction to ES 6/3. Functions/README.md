### Functions
```js
function myFunc(val) {
    return val;
}

// function expression

const myFunc = function() {
    return val;
}

// Arrow function

const myFunc = () => {
    return val;
}

// Implicit return
const myFunc = (val) => val
const myFunc = val => val
```


### `this` context with arrow functions
```
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}
```
With arrow functions
```
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```