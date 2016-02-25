var util = require('util');

var gulp = require('gulp');
var sh = require('shelljs');

var syspol = require('syspol');

var pkgJSON = require('./package.json');
var logger = new syspol.util.Logger(pkgJSON.name);

gulp.task('default', function() {
    logger.log('From default function');
});

gulp.task('h', function() {
    console.log('From help function');
});
