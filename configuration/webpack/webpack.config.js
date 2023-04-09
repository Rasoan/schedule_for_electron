'use strict';
/** Здесь главный конфиг для версии dev, он будет пуляться в package.json */

const { merge } = require('webpack-merge');

const mainConfig = require("./main");
const rendererConfig = require("./renderer");
const preloadConfig = require("./preload");
const commonConfig = require("./common");
const { copyFilesFromDist } = require("./utils/utils");

module.exports = () => {
    return new Promise((resolve) => {
        const webpackConfigs = [
            mainConfig,
            rendererConfig,
            preloadConfig,
        ].map((config) => merge(
            commonConfig,
            config,
        ));

        copyFilesFromDist();

        resolve(webpackConfigs);
    });
};
