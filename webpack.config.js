const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    loader: path.join(__dirname, "src/assets/javascripts/loader.js"),
    messenger: path.join(__dirname, "src/assets/javascripts/messenger.js"),


  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "assets/js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
        'style-loader',
        { loader: 'css-loader', options: { url: false } },
        'sass-loader',
        ],
        },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images/*',
          to: 'assets/images/[name][ext]',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html"),
      chunks: ["loader","main","messenger"]
    })
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "production",
  devServer: {
    open: false,
    contentBase: "./dist",
    inline: true,
    port: 4000
  }
};