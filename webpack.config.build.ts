import * as path from 'path';
import * as webpack from 'webpack';
// @ts-ignore
import HTMLWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.js']
  },
  entry: {
    'react-seminar-1': path.join(
      __dirname,
      'presentations/about-react/index.tsx'
    )
  },
  output: {
    path: path.resolve(__dirname, 'public/react-seminar/1'),
    filename: '[name].bundle.js'
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
  }
};

export default config;
