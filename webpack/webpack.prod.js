const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!vendors.dll.js"],
    }),
  ],
};

module.exports = merge(common, config);
