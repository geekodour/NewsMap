var HTMLWebPackPlugin = require('html-webpack-plugin');
var HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'

    }); 
var path = require('path');

module.exports = {
    context: path.resolve('app'),
    entry: ["./index"],
    output: {
        path: path.resolve('dist'),
//        publicPath: '/public/assets/',
        filename: "./bundle.js"
    },
    devServer: {
        contentBase: 'dist'
    },
    module: {
    preLoaders: [
//      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader:"babel-loader"}
        ]
    },
    resolve: {
        extensions: ['','.js']
    },
    plugins: [HTMLWebPackPluginConfig],
    watch: true
    
}
