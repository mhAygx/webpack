const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动的将生生成的js引入到index.html中
const CleanWebpackPlugin=require('clean-webpack-plugin');
const webpack=require('webpack')
module.exports = { //
	entry: {
		app:"./src/index.js",
		// print:'./src/print.js',
	}, //指定输入文件，
    devtool: 'inline-source-map',//提示错误信息，追踪错误和警告在源代码中的原始位置。
	devServer:{
		contentBase:'./dist',
		hot:true
	},
	plugins: [
        new CleanWebpackPlugin(['dist']),//会清除旧文件只会留下打包后的文件,清理dist文件夹！
		new HtmlWebpackPlugin({//重新定义index.html文件
			title: 'Output Management'
     	}),
        new webpack.HotModuleReplacementPlugin()
   	],
	output: {
		filename: '[name].bundle.js', //指定输出文件
		path: path.resolve(__dirname, 'dist') //指定输出文件的路径。
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		},
		{
			test:/\.(xml)$/,
			use:[
				'xml-loader'
			]
		}]
	}
}