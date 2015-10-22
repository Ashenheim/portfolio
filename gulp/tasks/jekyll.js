/* ====================================
    Jekyll
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    spawn        = require('child_process').spawn,
    browserSync  = require('browser-sync'),
    runSequence  = require('run-sequence'),
    plumber      = require('gulp-plumber'),
    prettify     = require('gulp-prettify'),
    config       = require('../config').jekyll;


var jekyllPrompt = process.platform === "win32" ? "jekyll.bat" : "jekyll";

/*
    Tasks & Functions
------------------------------------ */

gulp.task('jekyll:dist', function (done) {
    spawn( jekyllPrompt, [
        'build',
        '-d' + config.dest,
        '-s' + config.src,
    ], {stdio: 'inherit'});
});


gulp.task('jekyll:dev', function (gulpCallBack) {
    browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
    var jekyll = spawn( jekyllPrompt , [
        'build',
        '-d' + config.dest,
        '-s' + config.src,
        '--config=' + config.src + '_config.yml,' + config.src + '_config.dev.yml',
    ], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulp.start('prettify');
        gulpCallBack(code === 0 ? null : 'ERROR:' + code)
    });
});

gulp.task('prettify', function() {
    gulp.src(config.dest + '**/*.html')
        .pipe(prettify({indent_size: 2}))
        .pipe(gulp.dest(config.dest))
});


gulp.task('jekyll:rebuild', function() {
    runSequence(['jekyll:dev'], function() {
        browserSync.reload();
    });
});
