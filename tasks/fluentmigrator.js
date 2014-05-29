var spawn = require('child_process').spawn,
    defaults = {
        exePath: 'Migrate.exe',
        provider: 'sqlserver2012',
        preview: true,
        task: 'migrate'
    },
    buildCommandParameters = function(options) {
        var allParams = ['conn', 'provider', 'assembly', 'task', 'output', 'outputFilename', 'preview'],
            params = [];

        allParams.forEach(function(param) {
            var val = options[param];

            if (val !== undefined) {
                if (typeof val == 'boolean') {
                    val && params.push('--' + param);
                } else {
                    params.push('--' + param);
                    params.push(val)
                }
            }
        });
        return params;
    };

module.exports = function(grunt) {
    grunt.registerTask('fluentmigrator', 'Migration starting', function() {
        var options = this.options(defaults),
            done = this.async(),
            log = function(message) { console.log(message.toString('utf8')); },
            migrate = spawn(options.exePath, buildCommandParameters(options));

        migrate.stdout.on('data', log);
        migrate.stderr.on('data', log);
        migrate.on('exit', function(code) {
            if (code > 8) grunt.fail.fatal('Migration failed.');
            done();
        });
    });
};
