/* ====================================
    Watch
==================================== */
var gulp        = require('gulp');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync');
var config      = require('../config.js');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch', function() {
    watch( config.jekyll.watch, function() {
        gulp.start('jekyll:rebuild');
    });
    watch( config.stylus.watch, function() {
        gulp.start('stylus');
    });
    watch( config.javascript.watch, function() {
        gulp.start('javascript');
    });
});
