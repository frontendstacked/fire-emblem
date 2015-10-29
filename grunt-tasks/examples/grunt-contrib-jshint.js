/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-jshint
 * Validate files with JSHint.
 * https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function (grunt) {
    grunt.config('jshint', {
        uses_defaults: ['<%= staticUrls.stationSite %>/station/js/pbslm.responsive.js']
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
