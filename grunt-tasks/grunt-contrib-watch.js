/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-watch
 * Run predefined tasks whenever watched file patterns are added, changed
 * or deleted.
 * https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function (grunt) {
  grunt.config('watch', {
    grunt: {
      files: ['Gruntfile.js']
    },
    sass: {
      files: 'scss/**/*.scss',
      tasks: ['sass']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
