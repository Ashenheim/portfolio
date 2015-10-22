/* ====================================
    Deploy
==================================== */
var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var config      = require('../config.js');

var settings = {}

/*
    Tasks & Functions
------------------------------------ */

gulp.task('deploy', function () {
    console.log(config.build + '**/*');
    return gulp.src( config.build + '**/*' )
        .pipe(deploy( settings ))
});
