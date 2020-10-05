const path = require("path");
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    plugins: [
      new HtmlWebpackPlugin({
       title: 'Eazy-Trak',
       title: 'Eazy-Trak',
        template: path.resolve('public/index.html')
      }),
      new CopyWebpackPlugin(
        {
       patterns: [
         { from: 'public/dist/manifest', to: 'manifest' }
        ]
      }
      ),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
    swDest: 'service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [{
      urlPattern: new RegExp('http://localhost:2020/'),
      handler: 'StaleWhileRevalidate'
    }]

    }),
    ],
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
};
