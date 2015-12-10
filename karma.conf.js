// Karma configuration
// Generated on Mon Dec 07 2015 22:24:16 GMT-0600 (CST)

var webdriverConfig = {
    hostname: 'localhost',
    port: 4723
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'bower_components/supersonic/supersonic.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/ng-tags-input/ng-tags-input.js',
      'bower_components/parse-sdk/lib/parse.js',
      'app/example/index.js',
      'app/example/scripts/**/*.js',
      'app/tests/ResultsControllerTests.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
          // 'node_modules/parse-mock/**/*.js': [ 'browserify' ]
    },


    plugins: [
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-browserify',
        'karma-sinon',
        'karma-webdriver-launcher'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // customLaunchers: {
    //     'iOS-Safari' : {
    //         base: 'WebDriver',
    //         platformName: "iOS",
    //         deviceName: '=iPhone 5s',
    //         config: webdriverConfig,
    //         browserName: 'Safari'
    //     }
    // },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
