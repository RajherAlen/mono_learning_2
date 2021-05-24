const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
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
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "/images",
					},
				},
			},
		],
	},
};
