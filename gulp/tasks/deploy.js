/* ====================================
    Deploy
==================================== */
var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var config      = require('../config.js').deploy;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('gh-pages', function () {
    return gulp.src( config.src )
        .pipe(deploy( config.settings ))
});

gulp.task('deploy', function() {
    runSequence(
        ['stylus', 'scripts'],
        ['jekyll:dist'],
        ['gh-pages']
    );
});
