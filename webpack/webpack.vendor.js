const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "production",
  entry: {
    vendors: ["react", "react-dom", "jotai"],
  },
  output: {
    filename: "[name].dll.js",
    library: "[name]_[fullhash]",
    path: path.resolve(__dirname, "..", "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[fullhash]",
      path: path.resolve(__dirname, "[name]-manifest.json"),
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
