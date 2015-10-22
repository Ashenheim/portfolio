/* ====================================
    Scripts
==================================== */
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var jshint      = require('gulp-jshint');
var browserSync = require('browser-sync');
var plumber     = require('gulp-plumber');
var config      = require('../config.js');

/*
    Tasks & Functions
------------------------------------ */

gulp.task('javascript', function() {
    console.log(config.build + config.javascript.src);
    gulp.src( config.javascript.src )
        .pipe(plumber())
        .pipe(concat('global.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest( config.build + config.javascript.dest ))
        .pipe( browserSync.reload({stream:true}) )
        .pipe(gulp.dest( config.jekyll.src + config.javascript.dest ));
});
