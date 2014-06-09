module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-release');
    grunt.loadTasks('tasks');

    grunt.initConfig({
        release: {
            options: { commitMessage: 'NPM Release v<%= version %>' }
        }
    });

    grunt.registerTask('default', [ 'fluentmigrator' ]);
};
