'use strict';
/** Здесь всё, что связанна с "main process" electron */

const path = require("path");

module.exports = {
    name: "mainProcess",
    target: 'electron-main',
    output: {
        path: path.resolve('dist'),
        filename: '[name].electron.js',
    },
    entry: {
        "main": path.resolve('src/main.ts'),
    },
};