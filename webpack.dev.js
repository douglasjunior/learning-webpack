const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: 'bundle.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        },
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    }
});