var path = require('path')
var webpack = require('webpack')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            publicPath: './',
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
      {
        test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2|mp4)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {     allChunks: true}),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: '../index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackHarddiskPlugin({
        alwaysWriteToDisk: true,
        filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  }
  // devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
    // == PRERENDER SPA PLUGIN == //
    // new PrerenderSPAPlugin({
    //   // Index.html is in the root directory.
    //   staticDir: path.join(__dirname),
    //   routes: [ '/' ],
    //   // Optional minification.
    //   minify: {
    //     collapseBooleanAttributes: true,
    //     collapseWhitespace: true,
    //     decodeEntities: true,
    //     keepClosingSlash: true,
    //     sortAttributes: true
    //   },
    //   renderer: new Renderer({
    //     renderAfterDocumentEvent: 'render-event'
    //   })
    // })
  ])
}
