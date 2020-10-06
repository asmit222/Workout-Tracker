const path = require("path");
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var OfflinePlugin = require('offline-plugin');


module.exports = {
  entry: "./client/index.js",
  mode: "production",
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
    plugins: [
      new HtmlWebpackPlugin({
       title: 'Eazy-Trak',
       template: path.resolve('public/index.html'),
       filename: 'index.html',
      }),
      new CopyWebpackPlugin(
        {
          patterns: [
            { from: 'public/index.html', to: 'index.html' }
          ]
        }
        ),
        // new WorkboxPlugin.GenerateSW({
          // these options encourage the ServiceWorkers to get in there fast
          // and not allow any straggling "old" SWs to hang around
          // swDest: 'service-worker.js',
          // clientsClaim: true,
          // skipWaiting: true,
          // maximumFileSizeToCacheInBytes: 5000000,
          // runtimeCaching: [{
          //     urlPattern: new RegExp('http://localhost:2020/'),
          //     handler: 'StaleWhileRevalidate'
          //   }]

          // }),
//           new WorkboxPlugin.InjectManifest({
// swSrc: './sw.js',
// swDest: "sw.js"
//           }),
          new OfflinePlugin({
            ServiceWorker: {
                // output to root level of project
                output: "../service-worker.js",
                maximumFileSizeToCacheInBytes: 5000000,

                // prevent conflicts with minifiers
                minify: false
            }
        }),

          // new SWPrecacheWebpackPlugin({
          //   cacheId: 'offline-app',
          //   dontCacheBustUrlsMatching: /\.\w{8}\./,
          //   filename: 'service-worker.js',
          //   minify: true,
          //   maximumFileSizeToCacheInBytes: 5000000,
          //   navigateFallback: 'index.html',
          //   staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
          // })

    ],
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
};
