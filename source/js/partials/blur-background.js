blurBackground = (function() {

    var canvas = document.getElementById("blurBG") || null;

    if (canvas) {
        console.log('hello')
        var cxt    = canvas.getContext('2d');
        var image  = new Image();
        image.src = '/images/narley/gifs/5NC3Gau.jpg';

        $(canvas).css({
            width: 100 +'%',
            height: 100 +'%'
        });

        var drawCanvas = function() {
            var w = canvas.width;
            var h = canvas.height;
            cxt.drawImage(image, 0, 0, w, h);
            stackBlurCanvasRGBA("blurBG", 0, 0, w, h, 30);
        }

        image.onload = function() {
            drawCanvas();
        };
    }

})();

// var canvas = document.createElement("canvas");
// var imageSrc = '/images/narley/gifs/5NC3Gau.jpg';
// var canvasContext = canvas.getContext("2d");
// var image = new Image();
// image.src = imageSrc;
//
// var drawCanvas = function() {
// 	var w = canvas.width;
// 	var h = canvas.height;
// 	canvasContext.drawImage(image, 0, 0, w, h);
// 	stackBlurCanvasRGBA(canvas, 0, 0, w, h, 3);
// }
//
// image.onload = function() {
// 	drawCanvas();
// };
