const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
            }),
        ],
    },
});
