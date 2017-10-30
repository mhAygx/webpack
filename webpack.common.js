/**
 * Created by 18713 on 2017/10/30.
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
      entry: {
        app: './src/index.js'
      },
      plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                  title: 'Production'
            })
      ],
      output: {
            filename: '[name].bundle.js',
                path: path.resolve(__dirname, 'dist')
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
    };