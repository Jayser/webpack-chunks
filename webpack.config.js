const Webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/app',
        a: './js/a',
        b: './js/b'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: "app",
            chunks: ["a", 'b']
        })
    ]
};