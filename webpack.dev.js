/**
 * Created by 18713 on 2017/10/30.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
    module.exports = merge(common, {
      devtool: 'inline-source-map',
      devServer: {
        contentBase: './dist'
      }
    });