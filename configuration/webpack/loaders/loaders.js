'use strict';

const cssLoader = {
    loader: 'css-loader',
    options: {
        importLoaders: 1,
    },
};

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [
            [
                "@babel/preset-env",
                {
                    loose: true,
                    debug: false,
                    modules: false,
                    // forceAllTransforms: isLegacyBrowsers,
                    // Please note: when specifying the targets.esmodules target, browsers targets will be ignored.
                    // targets: browserslist,
                    targets: {
                        "browsers": "chrome >= 59",
                    },
                    // useBuiltIns: 'usage' - Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.
                    // With this, polyfills are automatically included where needed. This means you can remove the @babel/polyfill import in
                    // Сейчас это не работает, т.к. babel вставляет 'import' в CommonJS-модуль, и из-за этого этот модуль транслируется как es-module, а не как CommonJS
                    // useBuiltIns: addBabelPolyfill ? "usage" : false,
                    // corejs: addBabelPolyfill ? '2' : void 0,
                },
            ],
            "@babel/preset-react",
        ],
        // plugins: [
        //     ["@babel/plugin-proposal-class-properties", { "loose": true }],
        // ],
    }
};

const typeScriptLoader = {
    loader: 'ts-loader',
};

const imageWebpackLoader = {
    loader: 'image-webpack-loader',
    options: {
        bypassOnDebug: true,
        optipng: {
            optimizationLevel: 7,
        },
        gifsicle: {
            interlaced: false,
        },
    },
};

module.exports = {
    cssLoader,
    babelLoader,
    typeScriptLoader,
    imageWebpackLoader,
}