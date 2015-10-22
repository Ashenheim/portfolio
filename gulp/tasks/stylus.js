/* ====================================
    stylus
==================================== */
var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync');
var nib          = require('nib');
var jeet         = require('jeet');
var rupture      = require('rupture');
var csswring     = require('csswring');
var cssMqpacker  = require('css-mqpacker');
var typographic  = require('typographic');
var autoprefixer = require('autoprefixer');
var assets       = require('postcss-assets');

var config       = require('../config.js');

var settings = {
    stylus: {
        use: [ nib(), jeet(), rupture(), typographic() ]
    },
    postcss: [
        // csswring(),
        autoprefixer(),
        cssMqpacker(),
        assets({
            basePath: 'source/markup/',
            loadPaths: ['images/','assets/media/'],
            cachebuster: true
        })
    ],
    sourcemaps: {
        includeContent: false,
        sourceRoot: '../../source/stylus'
    },
};

/*
    Tasks & Functions
------------------------------------ */

gulp.task('stylus', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Stylus compiling');
    gulp.src( config.stylus.src )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
            .pipe(stylus( settings.stylus ))
            .pipe(postcss( settings.postcss ))
        .pipe(sourcemaps.write( '../maps', settings.sourcemaps ))
        .pipe(gulp.dest( config.build + config.stylus.dest ))
        .pipe( browserSync.stream({match: '**/*.css'}) )
        .pipe(gulp.dest( config.jekyll.src + config.stylus.dest ));
});


// Error handler
var onError = function (err) {
    var errorMessage =
        '<pre><code>' + err.message + '</code></pre>';

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};
