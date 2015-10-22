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
    config       = require('../config.js').jekyll;


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

    var jekyll = spawn( jekyllPrompt , [
        'build',
        '-d' + config.dest,
        '-s' + config.src,
        '--config=' + config.src + '_config.yml,' + config.src + '_config.dev.yml',
    ], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR:' + code)
    });
    
});


gulp.task('jekyll:rebuild', function() {
    runSequence(['jekyll:dev'], function() {
        browserSync.reload();
    });
});
