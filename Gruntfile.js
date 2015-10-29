/*jshint strict:false, indent: 2 */

/**
 * Need a reference? Check out Ben Alman's repo for samples and examples:
 * https://github.com/cowboy/wesbos
 */

module.exports = function (grunt) {

    /**
     * Initialize config
     * Tip: Only include pkg. Other task configs should be configured in
     * their own files in the grunt-tasks dir.
     */
    grunt.initConfig({
      pkg: require('./package.json')
    });

    /**
    * Load each task's config from external file in the 'grunt-tasks' dir.
    */
    grunt.loadTasks('grunt-tasks');

    /**
    * Register tasks
    * Tip: Keep 'default' task last
    */
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('db', ['shell:mongod']);
    grunt.registerTask('web', ['shell:nodemon']);
    grunt.registerTask('develop', ['build', 'browserSync:dev', 'watch']);
    grunt.registerTask('default', ['develop']);
};
