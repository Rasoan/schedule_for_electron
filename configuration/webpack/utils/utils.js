'use strict';

const path = require("path");
const fse = require("fs-extra");

function copyFilesFromDist() {
    const linkToFolder_src = path.resolve('src', 'index.css');
    const linkToFolder_dist = path.resolve('dist', 'index.css');

    fse.copyFileSync(linkToFolder_src, linkToFolder_dist);
}

module.exports = {
    copyFilesFromDist,
}