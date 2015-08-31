/* ====================================
    Watch
==================================== */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config.js');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch:jekyll', function() {
    gulp.watch( config.jekyll.watch, ['jekyll:rebuild']);
});

gulp.task('watch:stylus', function() {
    gulp.watch( config.stylus.watch, ['stylus']);
});

gulp.task('watch:scripts', function() {
    gulp.watch( config.scripts.watch, ['scripts']);
});

gulp.task('watch', ['watch:jekyll', 'watch:stylus', 'watch:scripts']);
