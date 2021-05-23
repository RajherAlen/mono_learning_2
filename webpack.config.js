const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
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
