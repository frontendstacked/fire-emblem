/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-shell
 * Run shell commands
 * https://github.com/sindresorhus/grunt-shell
 *
 */
module.exports = function (grunt) {
  grunt.config('shell', {
    nodemon: {
      command: './node_modules/.bin/nodemon'
    },
    mongod: {
      command: 'mongod --dbpath ./data/mongodb'
    },
    linkbower: {
      command: 'ln -s `pwd`/bower_components `pwd`/public'
    }
  });
  grunt.loadNpmTasks('grunt-shell');
};
