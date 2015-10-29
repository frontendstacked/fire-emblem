/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-uglify
 * Minify files with UglifyJS.
 * https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function (grunt) {
    grunt.config('uglify', {
      prod: {
        src: '<%= staticUrls.stationSite %>/station/js/pbslm.responsive.js',
        dest: '<%= staticUrls.stationSite %>/station/js/pbslm.responsive.min.js'
      }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
