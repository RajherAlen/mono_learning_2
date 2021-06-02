const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
		support: "./src/support.js",
	},
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
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "img/[name].[ext]",
						outputPath: "images",
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		clean: true,
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
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
};
