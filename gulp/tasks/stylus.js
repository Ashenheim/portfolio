/* ====================================
    stylus
==================================== */
var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var postcss     = require('gulp-postcss');
var sourcemaps  = require('gulp-sourcemaps');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var config      = require('../config.js').stylus;


/*
    Tasks & Functions
------------------------------------ */

// Error handler
var onError = function (err) {
    var errorMessage =
        '<span style="color: #f10000;">Stylus error: </span>' + err.name +
        '<span style="display: block; color: #ccc; font-size: 80%;"> on line: <span style="color: #fff;">' +
            err.lineno +
        '</span></span>' +
        '<span style="display: block; color: #ccc; font-size: 80%;"> in file: <span style="color: #fff;">' + err.filename + '</span></span>';

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};

gulp.task('stylus', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Stylus compiling');
    return gulp.src( config.src )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
            .pipe(stylus(config.settings.stylus))
            .pipe(postcss(config.settings.postcss))
        .pipe(sourcemaps.write( '../maps', config.settings.sourcemaps ))
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ))
        .pipe( browserSync.stream({match: "**/*.css"}));
});
