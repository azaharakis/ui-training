### [Babel](https://babeljs.io/)
Simply; Babel is a tool that allows us to compile the current spec of the Ecmascript so that it 
is compatible in earlier environments, particularly useful for older browsers and earlier versions
of node. 

### [Babelrc](https://babeljs.io/docs/usage/babelrc/)
Babel can be configured using an rc file. Babel is plugin based an requires you to opt into the
features of Ecmascript you want. It also has some additional plugins to compile [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) 
 syntax sugar that aids in the creation of react components.

### [babel-register](https://babeljs.io/docs/core-packages/babel-register)
A simple and useful module that will bind to node's require hook to compile files on the fly. Without setting up 
webpack this is a easy way to compile modern javascript. For a more performant approach it's best
 to precompile using [webpack](https://webpack.js.org/).
 
 