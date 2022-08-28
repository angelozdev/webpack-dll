const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "..", "dist"),
    },
  },
};

module.exports = merge(common, config);
