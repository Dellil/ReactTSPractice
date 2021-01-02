const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'development', // if is production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', 'ts']
    },

    entry: {
        app: './client.tsx'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
        }]
    },
    plugins: [
        
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
}