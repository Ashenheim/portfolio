/* ====================================
    stylus
==================================== */
var gulp            = require('gulp');
var stylus          = require('gulp-stylus');
var postcss         = require('gulp-postcss');
var sourcemaps      = require('gulp-sourcemaps');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');

// Library imports
var nib             = require('nib');
var jeet            = require('jeet');
var rupture         = require('rupture');
var csswring        = require('csswring');
var autoprefixer    = require('autoprefixer');
var assets          = require('postcss-assets');

var config          = require('../config.js').stylus;

var settings = {
    stylus: {
        use: [
            nib(),
            jeet(),
            rupture()
        ]
    },
    postcss: [
        // csswring(),
        assets(),
        autoprefixer("last 2 versions")
    ],
    sourcemaps: {
        includeContent: false,
        sourceRoot: '../../_source/sass'
    },
};

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
            .pipe(stylus(settings.stylus))
            .pipe(postcss(settings.postcss))
        .pipe(sourcemaps.write( '../maps', settings.sourcemaps ))
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ))
        .pipe( browserSync.stream({match: "**/*.css"}));
});
