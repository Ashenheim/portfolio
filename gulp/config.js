/* ====================================
    Configuration file
==================================== */
var nib = require('nib');
var jeet = require('jeet');
var rupture = require('rupture');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer');

var $p = {
    bower: "./bower_components/",
    build: {
        index : "build/",
        style : {
            one: "build/assets/css/",
            two: "source/markup/assets/css/"
        },
        js : {
            one: "build/assets/js/",
            two: "source/markup/assets/js/"
        },
    },
    source: {
        index : "source/markup/",
        jade  : "source/markup/",
        style : "source/stylus/",
        js    : "source/js/",
    }
}


module.exports = {
    /* ------------------------------
        Jekyll
    ------------------------------ */
    jekyll: {
        src: $p.source.index,
        dest: $p.build.index,
        watch: $p.source.index + '**/*.{html,json,yml,csv,jpg,png,gif}',
    },
    /* ------------------------------
        Style
    ------------------------------ */
    stylus: {
        src: [ $p.source.style + 'global.styl'],
        dest: {
            one: $p.build.style.one,
            two: $p.build.style.two,
        },
        watch: [
            $p.source.style + '*.styl',
            $p.source.style + '**/*.styl'
        ],
        settings: {
            stylus: {
                use: [ nib(), jeet(), rupture() ]
            },
            postcss: [
                csswring(),
                autoprefixer()
            ],
            sourcemaps: {
                includeContent: false,
                sourceRoot: '../../_source/sass'
            },
        }
    },
    /* ------------------------------
        Scripts
    ------------------------------ */
    scripts: {
        src: [
            $p.bower + 'jquery/dist/jquery.js',
            $p.source.js + 'vendors/*.js',
            $p.source.js + 'partials/*.js',
            $p.source.js + 'init.js'
        ],
        dest: {
            one: $p.build.js.one,
            two: $p.build.js.two,
        },
        watch: [
            $p.source.js + '*.js',
            $p.source.js + '**/*.js'
        ]
    },
    /* ------------------------------
        Deploy
    ------------------------------ */
    deploy: {
        src: [
            $p.build.index + '**/*',
            $p.build.index + '*'
        ],
        settings: {}
    },
    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browsersync: {
        server: {
            baseDir: $p.build.index
        },
        host: "localhost",
        online: true,
        open: false,
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
}
