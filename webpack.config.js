const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        }
      },

    ]
  },  
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'СибирьТрансАзия Тестовое',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),    
  ],    

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },    
};

