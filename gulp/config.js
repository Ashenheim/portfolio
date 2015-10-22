/* ====================================
    Configuration file
==================================== */
var paths = {
    bower: "./bower_components/",
    assets: {
        css : 'assets/css/',
        js  : 'assets/js/'
    },
    build: 'build/',
    src: {
        index : 'source/',
        jekyll: 'source/markup/',
        stylus: 'source/stylus/',
        javascript: 'source/javascript/'
    }
};


module.exports = {

    build: paths.build,

    /* ------------------------------
        Jekyll
    ------------------------------ */
    jekyll: {
        src:   paths.src.jekyll,
        dest:  paths.build,
        watch: [
            paths.src.jekyll + '**/*.{html,md,yml}'
        ]
    },
    /* ------------------------------
        Style
    ------------------------------ */
    stylus: {
        src:  paths.src.stylus + '*.styl',
        dest: paths.assets.css,
        watch: [
            paths.src.stylus + '*.styl',
            paths.src.stylus + '**/*.styl'
        ]
    },
    /* ------------------------------
        Javascript
    ------------------------------ */
    javascript: {
        src:  [
            paths.bower + 'jquery/dist/jquery.js',
            paths.src.javascript + 'vendor/**/*.js',
            paths.src.javascript + 'partials/**/*.js',
            paths.src.javascript + '*.js'
        ],
        dest: paths.assets.js,
        watch: [
            paths.src.javascript + '*.js',
            paths.src.javascript + '**/*.js'
        ]
    }
};
