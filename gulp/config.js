/* ====================================
    Configuration file
==================================== */

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

    source: $p.source.index,
    build: $p.build.index,

    /* ------------------------------
        Jekyll
    ------------------------------ */
    jekyll: {
        src: $p.source.index,
        dest: $p.build.index,
        watch: $p.source.index + '**/*.{html,json,yml,csv,jpg,png,gif,md,markdown}',
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
        ]
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
    }
}
