const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // that's where the building process starts from
    entry: './src/index.js',

    // build output
    output: {

        // bundles all the js code into a single file adding hash to the file name
        // hash is dependent on the contents of the file
        // if you want to remove the hash from the file name, remove [contenthash]
        filename: 'bundle.js',

        // saves the bundled files in the following directory
        path: path.resolve(__dirname, './dist'),


        publicPath: ''
    },

    // for production builds, comment the following line
    devtool: '#inline-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 8085
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/env', '@babel/react']
            }
          }
        },
        {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            use: ['file-loader']
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.xml$/i,
            use: 'raw-loader',
        },
        {
            test: /\.hbs$/i,
            use: ['handlebars-loader']
        }
      ]
    },
    plugins: [

        // extract all css code into a new file.
        // adding hash to the file name
        // hash is dependent on the contents of the file
        // if you dont need hash in the name, remove [contenthash]
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),

        // delete everyting from dist folder before each build
        new CleanWebpackPlugin(),

        // generates html file in dist folder
        // if you need to add/modify content in the generated html file, do it in the template file referenced below
        new HTMLWebpackPlugin({

            // will get copied in the html file
            title: 'MyTitle',

            // will get copied in the html file
            description: 'description',

            // template file using which the final html file will be generated
            template: 'page-template.hbs',

            // name of the generated html file
            filename: 'index.html'
        })
    ]
  };