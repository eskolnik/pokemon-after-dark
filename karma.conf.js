// karma.conf.js
module.exports = function(config) {
  config.set({
    // use the PhantomJS browser
    browsers: ['PhantomJS'],

    // files that Karma will server to the browser
    files: [
      // all js files in src folder
      // 'src/**/*.js',

      // use Babel polyfill to emulate a full ES6 environment in PhantomJS
      'node_modules/babel-polyfill/dist/polyfill.js',

      // all js files in test folder
      'test/**/*.js'
    ],

    // use the Jasmine testing framework
    frameworks: ['jasmine'],
    // test reporters that Karma should use
    reporters: [
      // use karma-spec-reporter to report results to the browser's console
      'spec'
    ],
    // karma-spec-reporter configuration
    specReporter: {
      // remove meaningless stack trace when tests do not pass
      maxLogLines: 1,
      // do not print information about tests that are passing
      suppressPassed: true
    },
    preprocessors: {
      'test/**/*.js': [
        // use karma-webpack to preprocess the files via webpack
        'webpack'
      ]
    },
    webpack: {
      module: {
        loaders: [
          // use babel-loader to transpile the test folder
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          // use isparta-loader for ES6 code coverage in the src folder
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|test)/,
            loader: 'isparta'
          }
        ]
      },
      // relative path starts out at the src folder when importing modules
      // resolve: {
      //   root: path.resolve('./src')
      // }
    },
    externals: {
     'cheerio': 'window',
     'react/addons': true,
     'react/lib/ExecutionEnvironment': true,
     'react/lib/ReactContext': true
    },
    webpackMiddleware: {
      // do not output webpack build information to the browser's console
      noInfo: true
    }
  })
}
