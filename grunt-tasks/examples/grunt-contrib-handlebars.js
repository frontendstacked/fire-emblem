/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-contrib-handlebars
 * Compile LESS files to CSS.
 * src: https://github.com/gruntjs/grunt-contrib-handlebars
 *
 * TODO: define a separate prod task which may additionally concat, minify, etc.
 */


module.exports = function (grunt) {
    grunt.config('handlebars', {
        options: {
            namespace: 'PBSLM.Templates',
            processName: function (filePath) {
		return filePath.replace(/(.*)static\//, '').replace(/templates\//, '').replace(/\.hbs$/, '');
	    }
        },
        brutus: {
            options: {
                paths: [
                    grunt.config('staticUrls').brutus
                ]
            },
            files: {
                '<%= staticUrls.brutus%>/brutus/js/templates.min.js':
                '<%= staticUrls.brutus%>/brutus/templates/*.hbs',
            }
        },
	caesar: {
	    options: {
		paths: [
		    grunt.config('staticUrls').caesar
		],
	    },
	    files: {
		'<%= staticUrls.caesar%>/caesar/js/templates.min.js':
		'<%= staticUrls.caesar%>/caesar/templates/*.hbs'
	    }
	}
    });
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};

