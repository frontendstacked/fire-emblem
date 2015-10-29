/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-sass
 * This task uses libsass which is a Sass compiler in C++. In contrast to the
 * original Ruby compiler, this one is much faster, but is missing some
 * features, though improving quickly. It also doesn't support Compass. Check
 * out grunt-contrib-sass if you prefer something more stable, but slower.
 * https://github.com/sindresorhus/grunt-sass
 */
module.exports = function (grunt) {
  grunt.config('sass', {
    options: {
      includePaths: [
        'bower_components/foundation/scss',
        'bower_components/semantic.gs/stylesheets/scss'
      ]
    },
    dist: {
      options: {
        outputStyle: 'compressed'
      },
      files: {
        'public/stylesheets/app.css': 'scss/app.scss',
        'public/stylesheets/index.css': 'scss/index.scss'
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
