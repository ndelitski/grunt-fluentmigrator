### Overview
Here is simple Migrate.exe wrapper. Provide path to executable(relative to project directory) and command-line parameters which will be passed directly to executable(you can list all parameters by typing Migrate.exe -h)

```js
grunt.initConfig({
    fluentmigrator: {
        options: {
            exePath: 'tools/migrator/Migrate.exe'
        },
        file: {
            assembly : 'src/SomeProject.Migrations/bin/Debug/SomeProject.Migrations.dll',
            output: true,
            outputFileName: 'migrated.sql',
            conn: "Server=.;initial catalog=SiteDb;Integrated Security=true;"
        }
    }
})
```

### Defaults
This default options will be merged with task-defined

```js
{
    exePath: 'Migrate.exe',
    provider: 'sqlserver2012',
    task: 'migrate'
}
```

### Accepted command line arguments
```
'assebly', 'provider', 'conn', 'task', 'verbose', 'output', 'outfile', 'namespace', 'steps', 'preview', 'version', 'profile', 'timeout', 'workingdirectory', 'tag', 'context', 'tps'
```

### Change log

0.1.3 (December 14, 2014)
* multitasking
* more concise task syntax

0.1.2 (June 9, 2014)
* Support all command-line parameters
* fixed bug with output file name and directory

0.1.1 (May 29, 2014)
* Initial version


