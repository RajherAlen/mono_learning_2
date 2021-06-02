const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000,
		open: true,
	},
	plugins: [new MiniCssExtractPlugin()],
});
