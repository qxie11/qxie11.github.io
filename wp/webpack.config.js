const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require( 'path' );

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true
	 },
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_module/,
				use: 'babel-loader'
			},
			{
				test: /\.(css|scss|sass)?$/,
				use: [  "style-loader",
				{
					loader: "css-loader",
				},
				{
					loader: "postcss-loader",
					options: {
						plugins: [
							require("autoprefixer")()
						]
					}
				},
				{
					loader: "sass-loader",
				} ]
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]",
					},
				},
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: {
					loader: "file-loader",
					options: {
						name: "img/",
					},
				},
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin([path.join(__dirname, "dist")], {
			verbose: true
		}),
		new HtmlWebPackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html'
		})
	]
};
