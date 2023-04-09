'use strict';
/** "Preload process" для "renderer process" в котором PhoneRemote */

const path = require("path");

module.exports = {
    name: "preloadProcessUI",
    target: 'electron-preload',
    output: {
        path: path.resolve( 'dist'),
        filename: '[name].electron.js',
    },
    entry: {
        "preload": path.resolve( 'src/preload.ts'),
    },
};