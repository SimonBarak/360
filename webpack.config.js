const path = require("path");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "distribution")
  },
  devServer: {
    contentBase: path.join(__dirname, "distribution"),
    compress: true,
    port: 9000
  }
};
