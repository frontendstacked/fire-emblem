/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-watch
 * Run predefined tasks whenever watched file patterns are added, changed
 * or deleted.
 * https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function (grunt) {
    grunt.config('watch', {
      // Tip: make targets tasks: less, jshint, etc. not Django apps
      less: {
        files: [
          '<%= staticUrls.brutus %>/brutus/less/**/*.less',
          '<%= staticUrls.caesar %>/caesar/less/**/*.less',
          '<%= staticUrls.stationSite %>/station/less/**/*.less',
          '<%= staticUrls.stationSite %>/station_site/less/**/*.less'
        ],
        tasks: ['less:dev']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};
