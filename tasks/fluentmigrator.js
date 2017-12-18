var spawn = require('child_process').spawn,
    _ = require('underscore'),
    cliArgsWhitelist = ['assembly', 'provider', 'conn', 'task', 'verbose', 'output', 'outfile', 'namespace', 'steps', 'preview', 'version', 'profile', 'timeout', 'workingdirectory', 'tag', 'context', 'tps' ],
    buildCommandParameters = require('./../utils').buildCommandParameters;

module.exports = function(grunt) {
    grunt.registerMultiTask('fluentmigrator', 'Fluent migrator cli wrapper', function() {
        var options = _.extend(this.options({
                exePath: 'Migrate.exe',
                provider: 'sqlserver2014',
                task: 'migrate'
            }), this.data),
            done = this.async(),
            log = function(message) {
                console.log(message.toString('utf8'));
            },
            commandParams = buildCommandParameters(_.pick(options, cliArgsWhitelist));
        grunt.verbose.writeln("executing " + options.exePath + " " + commandParams.join(' '))
        var migrate = spawn(options.exePath, commandParams);

        migrate.stdout.on('data', log);
        migrate.stderr.on('data', log);
        migrate.on('exit', function(code) {
            if (code > 8) grunt.fail.fatal('Migration failed.');
            done();
        });
    });
};
