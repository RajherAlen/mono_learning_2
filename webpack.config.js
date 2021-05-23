const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 3 - Creates `style` nodes from JS strings
                    "style-loader",
                    // 2 - Translates CSS into CommonJS
                    "css-loader",
                    // 1 - Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};
