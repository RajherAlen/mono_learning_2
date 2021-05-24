module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
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
