"use strict";

$(document).ready(function() {
    $('footer').css('top', $(document).height());
    $('#logo').css("height", $('nav').height());
    $('#name').css("height", $('nav').height() / 2);
    $('#content').css('padding-top', '5.5rem'); 
    var newhref = window.location.hash.slice(1);
    loadContent(newhref);
    
    $(document).on('resize', function() {
        resizeFontSize();
    });
    //populateSponsorsList();
});

$('.nav a').on('click', function() {
    var newhref = $(this).attr('href').slice(1);
    loadContent(newhref);
});

$(window).resize(function() {
   resizeFontSize();
});

function loadContent(newhref) {
    var content = $('#content');
    var hashIndex = window.location.href.indexOf('index.html#');
    var newUrl = window.location.href.substr(0, hashIndex);  
    newUrl += '/pages/' + (newhref !== '' ?  newhref : 'home') + '.html' ;
    $('link[rel=stylesheet]:not([href*=main],[href*=bootstrap])').remove();
    $('<link/>').attr({
        href: 'css/' + (newhref !== '' ?  newhref : 'home') + '.css',
        rel: 'stylesheet'
    }).appendTo("head");
    content.load(newUrl);    
};

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
    $('#content').css('font-size', window.rem); //changed to .content to prevent changing the font-size of the nav bar
}

function populateSponsorsList() {
    for (var i = 0; i < sponsorsList.length; i++) {
        $('#Platinum_Team').append('<a href="' + sponsorsList[i].website + '"><img src="' + sponsorsList[i].logo + '"></a>');
    }
}
