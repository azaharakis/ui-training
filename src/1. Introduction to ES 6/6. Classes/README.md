### [Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
JavaScript classes introduced in ECMAScript 6 are syntactical sugar over JavaScript's existing prototype-based inheritance.

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
const polygon = new Polygon(1,2);
```

is more or less the same as

```js
function Polygon(height, width) {
    this.height = height;
    this.width = width;
}
const polygon = new Polygon(1,2);
```

#### Static Methods
```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}
```