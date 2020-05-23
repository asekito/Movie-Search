const path = require("path");
// const dotenv = require("dotenv");

// module.exports = () => {
//   const env = dotenv.config().parsed;

//   const envKeys = Object.keys(env).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(env[next]);
//     return prev;
//   }, {});

//   return {
//     plugins: [new webpack.DefinePlugin(envKeys)],
//   };
// };

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
