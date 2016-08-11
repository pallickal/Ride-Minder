var webpack = require('webpack');
var path = require('path');
var argv = require('yargs').argv;

var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: !argv.watch,
    frameworks: [ 'mocha', 'chai', 'sinon' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'spec' ],
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: path.resolve(__dirname, APP_DIR),
        extensions: ['', '.js', '.jsx'],
        alias: {
         'sinon': 'sinon/pkg/sinon'
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          { test: /\.jsx?$/,
            include: APP_DIR,
            loader: 'babel-loader' }
        ]
      },
      // required for enzyme to work properly
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
