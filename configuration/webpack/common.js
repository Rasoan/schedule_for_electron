'use strict';

const {
    babelLoader,
    typeScriptLoader,
    cssLoader,
    imageWebpackLoader,
} = require("./loaders/loaders");
const path = require("path");

module.exports = {
    name: "common",
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // use: ['babel-loader', 'source-map-loader'],
                use: [
                    babelLoader,
                ],
                //exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: [
                    babelLoader,
                    typeScriptLoader,
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    cssLoader,
                ],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    cssLoader,
                    'sass-loader',
                ],
            },
            {
                test: /\.(ico|svg|gif|webp|mng|bpg|apng|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name: 'img/[hash].[ext]',
                        },
                    },
                    imageWebpackLoader,
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        mimetype: 'application/font-woff',
                    },
                }],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve("build_cache/webpack"),
    },
}