/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-cssmin
 * Compress CSS files.
 * https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function (grunt) {
  grunt.config('cssmin', {
    minify: {
      expand: true,
      src: [
        '<%= staticUrls.stationSite %>/station/css/*.css',
        '!<%= staticUrls.stationSite %>/station/css/*.min.css'
      ],
      ext: '.min.css'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
