'use strict';

const gulp = require('gulp');

const help = () => {
    const tasks = ['help'];
    const msg = 'Tasks:\n' + tasks.join('\n');
    console.log(msg);
};

gulp.task('default', help);
gulp.task('h', help);
gulp.task('help', help);
