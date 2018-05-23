import * as path from 'path';
import * as webpack from 'webpack';
// @ts-ignore
import HTMLWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  mode:
    (process.env.NODE_ENV as 'development' | 'production' | undefined) ||
    'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.js']
  },
  entry: path.join(__dirname, 'presentations/about-react/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'presentation.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          happyPackMode: true
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './template.html',
      inject: 'body'
    })
  ]
};

export default config;
