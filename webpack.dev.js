const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000,
		open: true,
	},
	entry: {
		index: "./src/index.js",
		support: "./src/support.js",
	},
	plugins: [],
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template/index.html",
			inject: true,
			chunks: ["index"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/template/support.html",
			inject: true,
			chunks: ["support", "index"],
			filename: "support.html",
		}),
	],
});
