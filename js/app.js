"use strict";
var preloadedImages = ["img/a123.png", "img/amRacing.png", "img/avl.jpg", "img/blackberry.png", "img/boeing.png", "img/bosch.jpg", "img/calepa.png",
    "img/CameroLarge.jpg", "img/CameroLarge2.jpg", "img/CameroMedium.png", "img/canada.png", "img/carb.jpg", "img/caterpillar.png", "img/cdadapco.png",
    "img/clean-cities.jpg", "img/COE_UW_CTR_purp_h100.jpg", "img/continental.png", "img/daily.jpg", "img/delphi.png", "img/dspace.jpg", "img/dynojet.png",
    "img/ec2Car.jpg", "img/ec2logo.jpg", "img/ecocar_name.png", "img/em-powering.jpg", "img/enerdel.jpg", "img/epa_logo-275x300.jpg", "img/etas.jpg",
    "img/Facebook.png", "img/favicon.png", "img/foster.png", "img/freescale.jpg", "img/fuel.png", "img/Gage_website.jpg", "img/genehaas.png", "img/gkn.jpg",
    "img/gkn.png", "img/gm.jpg", "img/Gmail.png", "img/IMG_0183.JPG", "img/IMG_0184.JPG", "img/IMG_0185.JPG", "img/IMG_0186.JPG", "img/IMG_0187.JPG", "img/IMG_0188.JPG",
    "img/IMG_0189.JPG", "img/IMG_0190.JPG", "img/IMG_0191.JPG", "img/IMG_0192.JPG", "img/IMG_0193.JPG", "img/IMG_0194.JPG", "img/IMG_0195.JPG", "img/IMG_0196.JPG",
    "img/isograph2.gif", "img/kvaser.png", "img/logo.png", "img/logo-crosschasm.png", "img/m1.png", "img/magna.png", "img/MarqMitchell.jpg", "img/math-works.jpg",
    "img/ME_UW_purp.png", "img/nameBlack.png", "img/nameWhite.png", "img/New Eagle_2013_website.jpg", "img/nsf.jpg", "img/Proterra Logo_website.jpg", "img/proterra.jpg",
    "img/qnx.png", "img/QuadBW.jpg", "img/QuadGold.jpg", "img/ricardo.jpg", "img/rms.png", "img/Sensorsogo.png", "img/siemens.jpg", "img/snap-on.jpg", "img/SponsorHolder.png",
    "img/team.jpg", "img/teamPictureBIG.jpg", "img/the-gear-works-logo.jpg", "img/tov.png", "img/trc.jpg", "img/ttr.png", "img/Twitter.png", "img/UnderDeco.png", "img/UnderDecoDark.png",
    "img/us-energy.jpg", "img/vector.png", "img/vts.PNG", "img/woodward.png"
];
var loadedImages = [];

$(document).ready(function() {
    $(document).on('resize', function() {
        resizeFontSize();
    });
    resizeFontSize();
    for (var i = 0; i < preloadedImages.length; i++) {
         loadedImages[i] = new Image();
         loadedImages[i].src = preloadedImages[i];
    }
});


$(window).resize(function() {
   resizeFontSize();
});


function resizeFontSize() {
    window.window_width = $(window).width();
    window.rem = window.window_width / 120;
    $('#logo').css('height', $('.navbar').height());
    $('#name').css('height', $('.navbar').height() / 2);
    $('#contactUs').css("top", $('.navbar').height());
    $('html').css('font-size', window.rem);
}