/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-browser-sync
 * A grunt task for the browser-sync module.
 * https://www.npmjs.com/package/grunt-browser-sync
 */
module.exports = function (grunt) {
  grunt.config('browserSync', {
    dev: {
      bsFiles: {
        src: [
          './public/stylesheets/*.css',
          './views_jade/**/*.jade'
        ]

      },
      options: {
        watchTask: true,
        proxy: "lvh.me:3000"
      }
    }
  });
  grunt.loadNpmTasks('grunt-browser-sync');
};
