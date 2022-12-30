const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ip = require("ip");

// dev server will run on localhost by default (localhost:8085)
// to run on local ip address instead, set useHostIp flag to true
const useHostIp = false;

const host = useHostIp ? ip.address() : "localhost";
const port = 8080;
const distDir = path.resolve(__dirname, "./dist");
const devtool = 'source-map'

module.exports = {

  // that's where the building process starts from
  entry: "./src/index.js",

  // build output
  output: {
    // bundles all the js code into a single file
    filename: "bundle.[name].[contenthash].js",

    // save the bundled files in the following directory
    path: distDir,

    publicPath: "",
    clean: true
  },

  devServer: {
    port: port
  },

  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
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
        test: /\.(png|jpg|jpeg|gif|bmp)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'static/images',
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.xml$/i,
        use: "raw-loader",
      }
    ],
  },
  plugins: [
    // extract all css code into a new file
    new MiniCssExtractPlugin(),

    // generates html file in dist folder
    // if you need to add/modify content in the generated html file, do it in the template file referenced below
    new HTMLWebpackPlugin({
      favicon: "./assets/favicon.png",

      // will get copied in the html file
      title: "MyTitle",

      // will get copied in the html file
      description: "description",

      // template file using which the final html file will be generated
      template: "page-template.html",

      // name of the generated html file
      filename: "index.html",
    }),

    // analyze what is inside your bundle by uncommenting the following line
    // new BundleAnalyzerPlugin()
  ],

  // uncomment to do debuggin in local environment
  // to be used only for local debugging
  // not recommended for production environment builds
  devtool: devtool,

};
