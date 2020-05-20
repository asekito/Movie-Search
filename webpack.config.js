const path = require("path");

module.exports = {
  entry: "./client/app.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node-modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./public/dist"),
  },
};
