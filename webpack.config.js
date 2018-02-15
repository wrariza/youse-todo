const webpack = require("webpack");
const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/bundle.css"),
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname}),
    )
  }

  return {
    entry: {
      app: [path.resolve(__dirname, 'src/app.js')],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 9000,
    },
    module: {
        rules: [
          {
            test: /\.(css|sass|scss)$/,
            use: ExtractTextPlugin.extract({ 
              fallback: 'style-loader', 
              use: 'css-loader!sass-loader' 
            })
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react', 'stage-2'],
              }
            }
          },
          {
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 100000
                }
              }
            ]
          }
        ]
      },
      plugins
    }
  }