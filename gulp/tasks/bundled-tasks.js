/* ====================================
    Default
==================================== */
var gulp = require('gulp');
var runSequence = require('run-sequence');

/*
    Tasks & Functions
------------------------------------ */

gulp.task('build', function() {
    runSequence(
        ['jekyll:dev'],
        ['stylus','javascript']
    )
});

gulp.task('serve', [
    'watch',
    'browsersync'
]);

gulp.task('default', [
    'build',
    'serve'
]);
