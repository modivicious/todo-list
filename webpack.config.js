const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  new HtmlWebpackPlugin({
    template: "./app/index.html",
  }),
  new MiniCssExtractPlugin(),
  new CleanWebpackPlugin(),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,

  entry: "./app/js/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              }
            }
          }
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    static: { directory: "./app" },
    hot: true,
    port: 3000,
  },
};