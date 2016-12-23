### Problem
The more complexity in your web application the additional consideration you will want to make when serving assets to your users.

### What we used to do
```js
<script src='path/to/file-1.js'></script>
<script src='path/to/file-2.js'></script>
...
```

- Performance is poor
    - Each request to a script would be blocking the next part of the document rendering until it was fetched
    - many requests
- Scripts need to be loaded in dependency order.


### How did we solve it
Many languages had there own way of solving this problem, Using javascript it was common to use a Task Runner
such as [grunt](http://gruntjs.com/) and [gulp](http://gulpjs.com/)

Using plugins it was possible to assign these to tasks which through these frameworks allowed you to apply
functionality optimized to do file manipulations.

Common tasks often setup for serving a webpage would be
- package all javascript files into a concatenated file to reduce many requests
- minified code to make javascript as small as possible.
- Cachebusting assets when new changes are made.
- move assets (javascript, html, css, images etc) to public directories
- prepossess scss to css

After the completion of these tasks we would have our production assets ready to go. Often our CI build would execute
these tasks to automate the process of deployment.

Here's an example:

```js
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};

//In the terminal
$ grunt
```

This works well enough, but for complex configurations using an imperative syntax for setting up tasks can often become hard to reason about;
particularly if you did things in the wrong order, and particularly when you want to do more sophisticated things.

This is a [grunt file](./sample-grunt.js) we had in one of our earlier projects that demonstrates some of this complexity

### [Webpack](https://github.com/petehunt/webpack-howto)

webpack is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.

Here is a diagram to demonstrate:
![ How webpack works](http://www.pro-react.com/materials/appendixA/images/picture2.png)

Webpack isn't a direct replacement for task runners but by using webpack you'll find very often that you use it with npm|yarn  commandline

### How does it work

```cmd
$ webpack entry.js bundle.js
```

with a config

```js
// webpack.config.js
module.exports = {
  entry: './main.js', // Entry point
  output: {
    filename: 'bundle.js' // Output file
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ] // Transform javascript Allow us to write ES6 code!
  }
};
```

The module property is the interesting part here. If we translate this configuration we can see the assignment of the following properties
- test: this is assigned a regex that is tested against every file in the dependency tree from the entry point. If it passes; it applies:
- loader: this is the module that we are applying to (in this case) js files. [Babel](https://babeljs.io/) Its the tool that compiles es6 javascript to
code that's understood in older browsers.
- query: Some loaders use this option, and it allows further configuration, in the case for the babel loader it also has its own set of plugins
to enable further experimental features of the Ecmascript spec.


### This looks complex
I guess it does at first, but it's incredibly powerful in what this allows you to achieve with your production build assets. Because webpack has access to your
whole dependency graph, applying different transformation on your code becomes declarative, and isn't dependant on the order of your tasks, like in grunt and gulp.

Like we see above it is possible to add a whole range of features to optimize your asset payload some of these include:
- [Caching/Cachebusting assets](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.tf16ulkcf)
- [Image optimization (base64, compression)](https://github.com/Klathmon/imagemin-webpack-plugin)
- [Minification of javascript/css](https://github.com/webpack/docs/wiki/optimization#minimize)
- [Deduping dependencies](https://github.com/webpack/docs/wiki/optimization#deduplication)
- [Async loading non essential dependencies.](https://webpack.github.io/docs/code-splitting.html)
- [Tree shaking (in future)](http://www.2ality.com/2015/12/webpack-tree-shaking.html)
- [Splitting out vendor assets from application code.](https://github.com/dmachat/angular-webpack-cookbook/wiki/Split-app-and-vendors)
- [Dependency size visualization](https://community.rea-group.com/docs/DOC-57850-reducing-page-bloat-by-culling-dependencies)
