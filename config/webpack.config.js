const path = require("path");
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  target: ['web', 'es5'],
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

    ],
  },
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    publicPath: ASSET_PATH,
  },
  devtool: "source-map",
  mode: "development",
};
