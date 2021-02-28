const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
require("dotenv").config();
var webpack = require("webpack");

var env = process.env.npm_package_scripts_env;

if (env === "production") {
  module.exports = {
    mode: "production",
    entry: "./client/index.js",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
        },
        {
          test: /\.js$|jsx/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, "public/dist"),
      filename: "bundle.[contenthash].js",
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env || ""),
      }),
      // new CompressionPlugin(),
      // new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/template.html",
        title: "Progressive Web Application",
      }),
      new WorkboxPlugin.GenerateSW({
        exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        runtimeCaching: [
          {
            // Match any request that ends with .png, .jpg, .jpeg or .svg.
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

            // Apply a cache-first strategy.
            handler: "CacheFirst",

            options: {
              // Use a custom cache name.
              cacheName: "images",

              // Only cache 10 images. edit: cache 10000
              expiration: {
                maxEntries: 10000,
              },
            },
          },
        ],
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        swDest: "../../service-worker.js",
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
  };
} else {
  module.exports = {
    mode: "development",
    entry: "./client/index.js",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
        },
        {
          test: /\.js$|jsx/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, "public/dist"),
      filename: "bundle.js",
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env || ""),
      }),
      // new CompressionPlugin(),
      // new BundleAnalyzerPlugin(),
      // new HtmlWebpackPlugin({
      //   template: "./public/template.html",
      //   title: "Progressive Web Application",
      // }),
      // new WorkboxPlugin.GenerateSW({
      //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      //   runtimeCaching: [
      //     {
      //       // Match any request that ends with .png, .jpg, .jpeg or .svg.
      //       urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      //       // Apply a cache-first strategy.
      //       handler: "CacheFirst",
      //       options: {
      //         // Use a custom cache name.
      //         cacheName: "images",
      //         // Only cache 10 images. edit: cache 10000
      //         expiration: {
      //           maxEntries: 10000,
      //         },
      //       },
      //     },
      //   ],
      //   // these options encourage the ServiceWorkers to get in there fast
      //   // and not allow any straggling "old" SWs to hang around
      //   swDest: "../../service-worker.js",
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
    ],
  };
}
