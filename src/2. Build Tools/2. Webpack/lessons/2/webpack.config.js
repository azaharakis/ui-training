// webpack.config.js
module.exports = {
    entry: './project/index.js',
    output: {
        path: './build', // This is where images AND js will go
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader:['babel-loader'], query: { presets: ['es2015']} },
            { test: /\regex here /, loader: 'assign loader for images' }
        ]
    }
};