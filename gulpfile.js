var util = require('util');

var gulp = require('gulp');
var sh = require('shelljs');

var syspol = require('syspol');

var pkgJSON = require('./package.json');
var logger = new syspol.util.Logger(pkgJSON.name);

function help() {
    var tasks = ['help', 'publish'];
    var msg = 'Tasks:\n' + tasks.join('\n');
    console.log(msg);
}

gulp.task('default', help);
gulp.task('h', help);
gulp.task('help', help);

gulp.task('publish', function() {
    var git = sh.exec('git push origin master month-in-review');
    logger.log('Git exit code: ' + git.code);
});

gulp.task('servelocal', function() {
    var serverCmd = sh.exec('./bin/servelocal');
    logger.log('Script exit code: ' + serverCmd.code);
});
