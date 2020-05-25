const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ip = require("ip");

// dev server will run on localhost by default (localhost:8085), to run on local ip address instead, set useHostIp flag to true
// and use the displayed address in the commant-prompt/terminal to run the app
const useHostIp = false;

const host = useHostIp ? ip.address() : "localhost";
const port = 8085;
const distDir = path.resolve(__dirname, "./dist");

module.exports = (env, options) => {

  const devtool = options.mode === 'development' ? '#inline-source-map' : 'none';

  return {
    // that's where the building process starts from
    entry: "./src/index.js",

    // build output
    output: {
      // bundles all the js code into a single file
      filename: "bundle.[hash].js",

      // saves the bundled files in the following directory
      path: distDir,

      publicPath: "",
    },

    // devServer: {
    //   contentBase: distDir,
    //   index: "index.html",
    //   port: port,
    //   host: host,
    // },

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
          test: /\.(png|jpg|jpeg|gif|bmp)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            outputPath: 'static/images',
          }
        },
        {
          test: /\.(scss|css)$/,
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
        filename: "styles.[hash].css",
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

      // analyze what is inside your bundle by uncommenting the following line
      // new BundleAnalyzerPlugin()
    ],

    devtool: devtool,
  };
};
