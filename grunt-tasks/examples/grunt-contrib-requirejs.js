/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-requirejs
 * Optimize RequireJS projects using r.js.
 * https://github.com/gruntjs/grunt-contrib-requirejs
 */

module.exports = function (grunt) {
    grunt.config('requirejs', {
        sequence: {
            options:{
                baseUrl: '<%= staticUrls.caesar %>/sequence/src/js/',
                mainConfigFile: '<%= staticUrls.caesar %>/sequence/src/js/config.js',
                out: '<%= staticUrls.caesar %>/sequence/js/main.min.js',
                name: 'main'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
