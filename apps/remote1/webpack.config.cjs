const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  devServer: {
    port: 5001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  output: {
    publicPath: "http://localhost:5001/",
  },
  resolve: {
    extensions: [".js", ".jsx"], // 🔥 ADD THIS BLOCK
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
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx"      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
