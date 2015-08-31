/* ====================================
    Scripts
==================================== */
var gulp =  require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var config = require('../config.js').scripts;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('scripts', function() {
    gulp.src( config.src )
        .pipe(plumber())
        .pipe(concat('global.js'))
        .pipe(gulp.dest( config.dest.one ))
        .pipe( browserSync.reload({stream:true}) )
        .pipe(gulp.dest( config.dest.two ))
});
