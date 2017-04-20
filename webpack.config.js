const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.pcss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader?sourceMap',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        sourceMap: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                },
                'postcss-loader'
            ]
        }]
    },
    devtool: 'source-map'
};
