const path = require("path");
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
  entry: "./client/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
            ],
          },
        },
      },

    ],
  },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //    title: 'Eazy-Trak',
    //    template: path.resolve('public/index.html'),
    //    filename: 'index.html',
    //   }),
    //   new CopyWebpackPlugin(
    //     {
    //       patterns: [
    //         { from: 'public/index.html', to: 'index.html' }
    //       ]
    //     }
    //     ),



    //       new OfflinePlugin({

    //         ServiceWorker: {
    //             // output to root level of project
    //             output: "../service-worker.js",
    //             maximumFileSizeToCacheInBytes: 5000000,

    //             // prevent conflicts with minifiers
    //             minify: false
    //         }
    //     }),

    // ],
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
};
