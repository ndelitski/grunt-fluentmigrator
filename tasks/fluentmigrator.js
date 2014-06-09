var spawn = require('child_process').spawn,
    extend = require('./../utils').extend,
    buildCommandParameters = require('./../utils').buildCommandParameters;

module.exports = function(grunt) {
    grunt.registerTask('fluentmigrator', 'Migration starting', function() {
        var options = extend({
                exePath: 'Migrate.exe',
                params: {
                    provider: 'sqlserver2012',
                    preview: true,
                    task: 'migrate'
                }
            }, this.options()),
            done = this.async(),
            log = function(message) {
                console.log(message.toString('utf8'));
            },
            migrate = spawn(options.exePath, buildCommandParameters(options.params));

        migrate.stdout.on('data', log);
        migrate.stderr.on('data', log);
        migrate.on('exit', function(code) {
            if (code > 8) grunt.fail.fatal('Migration failed.');
            done();
        });
    });
};
