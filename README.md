### Overview
```js
grunt.initConfig({
    fluentmigrator: {
        options: {
            exePath: 'tools/migrator/Migrate.exe',
            assembly : 'src/SomeProject.Migrations/bin/Debug/SomeProject.Migrations.dll',
            output: true,
            outputFileName: 'migrated.sql',
            conn: config['DB_CONNECTION_STRING']
        }
    },
})
```
