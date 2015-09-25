"use strict";

$(document).ready(function() {
    $(document).on('resize', function() {
        resizeFontSize();
    });
    resizeFontSize();
});

$(window).resize(function() {
   resizeFontSize();
});

function resizeFontSize() {
    var body = $('body');
    var nav = $('nav');
    window.window_width = $(window).width();
    window.rem = window.window_width / 120;
    $('#logo').css("height", nav.height());
    $('#name').css("height", nav.height() / 2);
    $('html').css('font-size', window.rem);
}