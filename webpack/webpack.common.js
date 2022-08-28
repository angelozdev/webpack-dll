const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const webpack = require("webpack");

/** @type {import("webpack").Configuration} */
const config = {
  entry: path.resolve(__dirname, "..", "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "main.[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(__dirname, "vendors-manifest.json")),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "index.html"),
      filename: "index.html",
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "..", "dist/vendors.dll.js"),
      publicPath: "",
    }),
  ],
};

module.exports = config;
