"use strict";

$(document).ready(function() {
    $('footer').css('top', $(document).height());
    $('#logo').css("height", $('nav').height());
    $('#name').css("height", $('nav').height() / 2);
    $('.content').css('padding-top', '5.5rem'); //Adds padding to ng-view to push it beneath the nav bar
    $(document).on('resize', function() {
        resizeFontSize();
    });
    //populateSponsorsList();
});

$(window).resize(function() {
   resizeFontSize();
});

function resizeFontSize() {
    var body = $('body');
    var nav = $('nav');
    var offSet;
    window.window_width = $(window).width();
    window.window_height = $(window).height();
    var aspectRatio =  window.window_width / window.window_height;
    //body.css('margin-left', 0).css('margin-top', 0);
    if (aspectRatio > (16 / 9)) {
        window.rem = window.window_height / 67.5;
    //    offSet = (window.window_width - body.width()) / 2;
    //    body.css('margin-left', offSet); // causing the shift left when scaling up
    } else {
        window.rem = window.window_width / 120;
    //    offSet = (window.window_height - body.height()) / 2;
    //    body.css('margin-top', offSet);
    }
    //$('#logo').css("height", nav.height()); //looks unesscary; bootstrap nav does not appear to change size upon resize
    //$('#name').css("height", nav.height() / 2); //looks unesscary; bootstrap nav does not appear to change size upon resize
    $('.content').css('font-size', window.rem); //changed to .content to prevent changing the font-size of the nav bar
}

function populateSponsorsList() {
    for (var i = 0; i < sponsorsList.length; i++) {
        $('#Platinum_Team').append('<a href="' + sponsorsList[i].website + '"><img src="' + sponsorsList[i].logo + '"></a>');
    }
}
