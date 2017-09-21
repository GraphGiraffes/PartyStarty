//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//plugins:[
 // new ExtractTextPlugin('styles.css'),
//]
const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['es2015']
        }
      },
      {
        test:/\.css$/,
      loader:'style-loader!css-loader'
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};