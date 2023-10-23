/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const HtmlBundlerWebpackPlugin = require("html-bundler-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  plugins: [
    new HtmlBundlerWebpackPlugin({
      entry: { import: "src/views/index.ejs" },
      preprocessor: "ejs",
      preprocessorOptions: { views: ["src/views/includes"] },
      outputPath: "views",
      filename: "index.html",
      minify: true,
    }),
  ],
  mode: "production",

  target: "node",
  externals: [nodeExternals()],

  entry: "./src/server.ts",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};
