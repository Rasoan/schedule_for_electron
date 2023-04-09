'use strict';
/** Конфиг для "renderer process" в котором работает связка Proxy и Phone */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    name: "rendererProcess_proxy",
    target: "electron-renderer",
    entry: {
        renderer: path.resolve('src/index.tsx'),
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].electron.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
            filename: path.resolve('dist/index.html'),
            chunks: ["renderer"]
        }),
    ]
};