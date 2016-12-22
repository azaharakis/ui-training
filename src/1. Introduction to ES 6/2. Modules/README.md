### Things to know
- Module paths are relative in node
- If you are importing a dependency from node_modules (npm) then the module should not start with a path but the name of the module in package.json

### Common JS
```js
module.export = function () {
    ...
}
// ---------------- To consume ----------------
const module = require('./path/to/module');
```



### Import | Export Syntax

1.
```js
export default function() {
    ...
}
//To consume
import defaultMember from "module-name";
```

2.
```js
export const member1 = function() { ... }
export const member2 = function() { ... }
export const member3 = function() { ... }
// ---------------- To consume ----------------
import * as name from "module-name";
name.member1
name.member2
name.member3
```

3.
```js
export const member = function() { ... }
// ---------------- To consume ----------------
import { member } from "module-name";
// -------------------- Or --------------------
import { member as alias } from "module-name";
```

4.
```js
export default function() { ... }
export const member1 = function() { ... }
export const member2 = function() { ... }
// ---------------- To consume ----------------
import { member1 , member2 } from "module-name";
member1(); //call this function
// -------------------- Or --------------------
import { member1 , member2 as alias2 , [...] } from "module-name";
// If we want to rename the output of alias2

import defaultMember, { member [ , [...] ] } from "module-name";
// default member refers to the default export
// default exports are your primary export you want your consumers to use.

import defaultMember, * as name from "module-name";
import "module-name";
```
