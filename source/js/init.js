$(document).ready(function() {
    // console.log('init loaded');
    //
    // var $canvas = $('.bg-overlay canvas');
    // var imageSrc = $canvas.attr('data-image');
    // var canvas = document.getElementById("bgOverlay");
    // var canvasContext = canvas.getContext("2d");
    // var image = new Image();
    //
    // image.src = imageSrc;
    //
    // var drawBlur = function() {
    //     var w = canvas.width;
    //     var h = canvas.height;
    //     canvasContext.drawImage(image, 0, 0, w, h);
    //     stackBlurCanvasRGBA('bgOverlay', 0, 0, w, h, 100);
    // };
    // image.onload = function() {
    //     drawBlur();
    // }
})

blurBackground = (function() {

    var $canvas = $('#bgOverlay');
    var imageSrc = '/images/thresh.jpg';
    var canvas = document.getElementById("bgOverlay");



    // bind events
    events.on('$createCanvas', createCanvas);

    function createCanvas(imageSrc) {
        var canvasContext = canvas.getContext("2d");
        var image = new Image();
        image.src = imageSrc;
        var w = canvas.width;
        var h = canvas.height;
        canvasContext.drawImage(image, 0, 0, w, h);
        stackBlurCanvasRGBA('bgOverlay', 0, 0, w, h, 10);
    }

    createCanvas(imageSrc);

})();



$('.article--short').on('click', function() {
    image = $(this).css('background-image');
    image = /^url\((['"]?)(.*)\1\)$/.exec(image);
    image = image ? image[2] : "";

    events.emit('$createCanvas', image);
});
