/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const HtmlBundlerWebpackPlugin = require("html-bundler-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  plugins: [
    new HtmlBundlerWebpackPlugin({
      entry: { index: "src/views/index.ejs" }, // => dist/views/index.html
      preprocessor: "ejs",
      preprocessorOptions: { views: ["src/views/includes"] },
      outputPath: "views", // html output path relative by output.path
      minify: true,
    }),
  ],
  mode: "production",

  target: "node",
  externals: [nodeExternals()],

  entry: {
    "server": "./src/server.ts",
  },

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
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};
