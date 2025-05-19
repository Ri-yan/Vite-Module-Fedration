const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  devServer: {
    port: 5002,
    hot: true,
  },
  output: {
    publicPath: "http://localhost:5002/",
  },
  resolve: {
    extensions: [".js", ".jsx"], 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const path = require('path');

// module.exports = {
//   entry: './src/main.jsx',
//   mode: 'development',
//   devServer: {
//     port: 5002,
//     hot: true,
//   },
//   output: {
//     publicPath: 'http://localhost:5002/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         options: {
//           presets: ['@babel/preset-react'],
//         },
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'remote2',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './App': './src/App',
//       },
//       shared: ['react', 'react-dom', 'react-router-dom'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './index.html',
//     }),
//   ],
// };
