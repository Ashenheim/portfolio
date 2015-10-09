var gulp = require('gulp');
var modernizr = require("customizr");

gulp.task('modernizr', function() {

    var settings = {
        "cache" : true,
        "dest" : "./modernizr.js",
        "options" : [
            "setClasses",
            "addTest",
            "html5printshiv",
            "testProp",
            "fnBind"
        ]
    };
    modernizr(settings);

})
