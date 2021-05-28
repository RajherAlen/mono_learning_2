const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 3 - Creates `style` nodes from JS strings
					MiniCssExtractPlugin.loader,
					// 2 - Translates CSS into CommonJS
					"css-loader",
					// 1 - Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		clean: true,
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000,
		open: true,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template/index.html",
		}),
	],
});
