const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const DotenvPlugin = require('dotenv-webpack');
const publicUrl = '';

module.exports = {
  devtool: 'inline-source-map',
  output: {
    pathinfo: true,
  },
  devServer: {
    hot: true,
    contentBase: commonPaths.contentBasePath,
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.contentBasePath + '/index.html',
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: publicUrl,
    }),
    new DotenvPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        include: commonPaths.srcPath,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                hack: `true; @import 'App.less'`,
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
};
