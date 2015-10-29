/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-less
 * Compile LESS files to CSS.
 * src: https://github.com/gruntjs/grunt-contrib-less
 *
 * TODO: define a separate prod task which may additionally concat, minify, etc.
 */

module.exports = function (grunt) {
  grunt.config('less', {
    dev: {
      options: {
        // Tip: use paths to keep @import paths shorter in your src files
        paths: [
          grunt.config('staticUrls').brutus,
          grunt.config('staticUrls').caesar,
          grunt.config('staticUrls').stationSite
        ]
      },
      files: {
        // station main
        '<%= staticUrls.stationSite %>/station/css/main.css':
          '<%= staticUrls.stationSite %>/station/less/main.less' ,
        // station resource
        '<%= staticUrls.stationSite %>/station/css/resource-pages.css':
          '<%= staticUrls.stationSite %>/station/less/resource-pages.less' ,
        // station homepage
        '<%= staticUrls.stationSite %>/station/css/homepage.css':
          '<%= staticUrls.stationSite %>/station/less/homepage.less' ,
        // station favorites
        '<%= staticUrls.stationSite %>/station/css/favorites.css':
          '<%= staticUrls.stationSite %>/station/less/favorites.less' ,
        // student_tools
        '<%= staticUrls.brutus %>/brutus/css/main.css':
          '<%= staticUrls.brutus %>/brutus/less/main.less' ,
        '<%= staticUrls.brutus %>/brutus/css/student.css':
          '<%= staticUrls.brutus %>/brutus/less/student.less',
        '<%= staticUrls.brutus %>/brutus/css/student-header-footer.css':
          '<%= staticUrls.brutus %>/brutus/less/student-header-footer.less',
        '<%= staticUrls.brutus %>/brutus/css/app.css':
          '<%= staticUrls.brutus%>/brutus/less/app.less',
        // storyboard (formerly postermaker)
        '<%= staticUrls.caesar %>/caesar/css/postermaker.css' :
          '<%= staticUrls.caesar %>/caesar/less/postermaker.less',
          '<%= staticUrls.caesar %>/caesar/css/puzzlemaker.css' :
          '<%= staticUrls.caesar %>/caesar/less/puzzlemaker.less',
        '<%= staticUrls.caesar %>/caesar/css/print.css' :
          '<%= staticUrls.caesar %>/caesar/less/print.less',
        // tools
        '<%= staticUrls.caesar %>/caesar/css/tools.css' :
          '<%= staticUrls.caesar %>/caesar/less/tools.less',
        // user_profile
        '<%= staticUrls.stationSite %>/station_site/css/user_profile/main.css' :
          '<%= staticUrls.stationSite %>/station_site/less/user_profile/main.less',
        // search
        '<%= staticUrls.stationSite %>/station_site/css/search/main.css' :
          '<%= staticUrls.stationSite %>/station_site/less/search/main.less',
        // cc
        '<%= staticUrls.stationSite %>/station_site/css/cc/cc.css' :
          '<%= staticUrls.stationSite %>/station_site/less/cc_settings/cc.less',
        // tinymce
        '<%= staticUrls.caesar %>/caesar/css/tinymce-custom.css' :
          '<%= staticUrls.caesar %>/caesar/less/tinymce-custom.less'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
};
