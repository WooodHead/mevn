var path = require('path')

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Watch Backend.
    watch: {
      backend: {
        files: ['app/routes/**/*.js'],
        tasks: ['default']
      },
      frontend: {
        files: ['fe/**/*.js', 'fe/**/*.vue'],
        tasks: ['webpack']
      }
    },
    // Webpack.
    webpack: {
      frontend: {
        entry: './fe/main.js',
        output: {
          path: path.resolve(__dirname, './public/javascripts/'),
          publicPath: '/dist/',
          filename: 'build.js'
        },
        module: {
          rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                loaders: {
                }
                // other vue-loader options go here
              }
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader',
              options: {
                name: '[name].[ext]?[hash]'
              }
            }
          ]
        },
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js'
          }
        },
        devServer: {
          historyApiFallback: true,
          noInfo: true
        },
        performance: {
          hints: false
        },
        devtool: '#eval-source-map'
      }
    }
  });

  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};

/*
 * Not Sure how to use it.
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
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
  ])
}
*/
