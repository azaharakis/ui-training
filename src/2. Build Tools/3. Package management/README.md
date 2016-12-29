### [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
npm makes it easy for JavaScript developers to share and reuse code. It has a couple of significant uses
- The ability to specify application dependencies which are placed within `node_modules/` directory
- Execute commands like starting up the application or compiling files through `npm scripts`
- Hosting your own application or library on the NPM registry.
 
 
### [Yarn](https://yarnpkg.com/)
Yarn is a tool developed by facebook that can often be used in replacement for NPM, it offers noticeable improvements over
 NPM in the following area's
 - Speed at installing modules, through its intelligent cache.
 - Deterministic package installations, through a [yarn.lock](https://yarnpkg.com/en/docs/yarn-lock) file
 

### package.json and shrinkwrap | yarn.lock
Packages (Dependencies) can be added to a project via `npm install --save package-name` or `yarn add package-name`
in doing so you'll notice an addition to the package.json file in your project.

```json
{
  "dependencies": {
    "package-name": "^1.1.4",
    ...
  }
}  
```
Looking at this closely we will notice that the package version is specified using [sermver](http://semver.org/)
and often prefixed with a `^` which in this case means without the addition of a shrinkwrap of yarn.lock file
a clean `npm install` or `yarn` will update you to the most recent major version (the first number). 
 
 For production systems this is often ill advised, as it maybe possible that an untested upgrade
 could break your application. Even specifying the exact version doesn't ellivate the problem
 of having the expected versions of modules as the modules you depend on may have additional dependencies
 which are specifying loose versions. `yarn.lock` and `npm-shrinkwrap.json` will map through your dependencies
 recursively and essentially create a manifest of all dependency versions at that point in time.
 
 