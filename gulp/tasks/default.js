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
        ['stylus', 'scripts'],
        ['jekyll:dev']
    )
});

gulp.task('serve', [
    'watch',
    'browsersync'
]);

gulp.task('default', function(cb) {
    runSequence(
        ['stylus', 'scripts'],
        ['jekyll:dev'],
        ['watch', 'browsersync']
    )
});
