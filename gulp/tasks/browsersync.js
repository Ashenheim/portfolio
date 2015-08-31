/* ====================================
    BrowserSync
==================================== */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config.js').browsersync;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('browsersync', function() {
    browserSync(config);
});
