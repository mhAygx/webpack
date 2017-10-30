/**
 * Created by 18713 on 2017/10/30.
 */
const webpack =require('webapck');
const merge = require('webpack-merge');//合并webpack配置
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
 module.exports = merge(common, {
     devtool: 'source-map',
      plugins: [
        new UglifyJSPlugin({
            sourceMap:true,//生产环境中使用true
        })
      ],
     new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')//指定在生产环境中：process.env.NODE_ENV === 'production'
         }
     })
});