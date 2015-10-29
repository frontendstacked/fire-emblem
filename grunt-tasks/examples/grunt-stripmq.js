/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-stripmq
 * Mobile-first CSS Fallback
 * https://github.com/jtangelder/grunt-stripmq
 */
module.exports = function (grunt) {
    grunt.config('stripmq', {
      //Viewport options
      options: {
          width: 1025,
          type: 'screen'
      },
      all: {
        files: [
          {
            //follows the pattern 'destination': ['source']
            '<%= staticUrls.stationSite %>/station/css/homepage-ie.css':
              '<%= staticUrls.stationSite %>/station/css/homepage.css'
          },
          {
            '<%= staticUrls.stationSite %>/station/css/resource-pages-ie.css':
              '<%= staticUrls.stationSite %>/station/css/resource-pages.css'
          },
          {
            '<%= staticUrls.stationSite %>/station/css/main-ie.css':
              '<%= staticUrls.stationSite %>/station/css/main.css'
          }
        ]
      }
    });
    grunt.loadNpmTasks('grunt-stripmq');
};
