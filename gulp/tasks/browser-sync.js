/* ====================================
    BrowserSync
==================================== */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config   = require('../config.js');

var settings = {
    server: {
        baseDir: config.build
    },
    host: "localhost",
    online: false,
    open: false,
    port: 8080,
    notify: {
        styles: [
            'color: rgb(255, 255, 255)',
            'position: fixed',
            'z-index: 999999',
            'bottom: 0px',
            'left: 0px',
            'font-size: 1em',
            'background: rgba(0, 0, 0, 0.8)',
            'font-family: arial, sans-serif',
            'padding: 10px',
            'box-shadow: 0 0 5px rgba(0,0,0,.3)'
        ]
    }
}


/*
    Tasks & Functions
------------------------------------ */

gulp.task('browsersync', function() {
    browserSync(settings);
});
