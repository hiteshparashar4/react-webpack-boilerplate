const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  // that's where the building process starts from
  entry: "./src/index.js",

  // build output
  output: {
    // bundles all the js code into a single file
    filename: "bundle.js",

    // saves the bundled files in the following directory
    path: path.resolve(__dirname, "./dist"),

    publicPath: "",
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 8085,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.xml$/i,
        use: "raw-loader",
      },
      {
        test: /\.hbs$/i,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    // extract all css code into a new file
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),

    // delete everyting from dist folder before each build
    new CleanWebpackPlugin(),

    // generates html file in dist folder
    // if you need to add/modify content in the generated html file, do it in the template file referenced below
    new HTMLWebpackPlugin({
      favicon: "./assets/favicon.png",

      // will get copied in the html file
      title: "MyTitle",

      // will get copied in the html file
      description: "description",

      // template file using which the final html file will be generated
      template: "page-template.hbs",

      // name of the generated html file
      filename: "index.html",
    }),

    // analyze what is inside your bundle
    // new BundleAnalyzerPlugin()
  ],

  // to debug the code in browser, uncomment the following line. Use development mode
  // devtool: '#inline-source-map',
};
