"use strict";

$(document).ready(function() {
    $('footer').css('top', $(document).height());
    $('#logo').css("height", $('nav').height());
    $('#name').css("height", $('nav').height() / 2);
    $(document).on('resize', function() {
        resizeFontSize();
    })
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
    body.css('margin-left', 0).css('margin-top', 0);
    if (aspectRatio > (16 / 9)) {
        window.rem = window.window_height / 67.5;
        offSet = (window.window_width - body.width()) / 2;
        body.css('margin-left', offSet);
    } else {
        window.rem = window.window_width / 120;
        offSet = (window.window_height - body.height()) / 2;
        body.css('margin-top', offSet);
    }
    $('#logo').css("height", nav.height());
    $('#name').css("height", nav.height() / 2);
    $('html').css('font-size', window.rem);
}

var sponsorWebsite = ["http://www.foster.washington.edu/Pages/home.aspx", "http://www.me.washington.edu/", "http://www.engr.washington.edu/", "http://ghaasfoundation.org/",
    "http://www.isograph.com/", "http://www.rinehartmotion.com/", "http://www.amracinginc.com/", "http://www.thegearworks.com/",
    "http://www.continentaltire.com/www/tires_us_en/", "http://www.boeing.com/", "http://tovcapitalusa.com", "http://www.kvaser.com",
    "http://www.dynojet.com/", "http://www.eere.energy.gov/vehiclesandfuels", "http://www.gm.com/", "http://www.nrcan.gc.ca/", "http://www.mathworks.com/",
    "http://www.arb.ca.gov/", "http://www1.eere.energy.gov/cleancities/", "http://www.dspaceinc.com/", "http://www.a123systems.com/",
    "http://www.freescale.com/", "http://www.avl.com/", "http://www.nsf.gov/", "http://www.etas.com/", "http://www.snapon.com/",
    "http://www.trcpg.com", "http://www.magnapowertrain.com/", "http://www.bosch.com/", "http://www.crosschasm.com/", "http://www.siemens.com/plm/",
    "http://www.cd-adapco.com/", "http://www.vector.com/", "http://www.gkn.com/driveline/Pages/default.aspx", "http://www.sensors-inc.com/",
    "http://www.neweagle.net/", "http://www.blackberry.com/academic", "http://www.qnx.com", "http://www.woodward.com/",
    "http://www.gageproducts.com", "http://www.delphi.com", "http://www.cat.com/home", "http://www.ricardo.com",
    "http://www.proterra.com","http://www.epa.gov/"];

var sponsorLinks = ["img/foster.png","img/ME_UW_purp.png", "img/COE_UW_CTR_purp_h100.jpg", "img/genehaas.png", "img/isograph2.gif", "img/rms.png",
    "img/amRacing.png", "img/the-gear-works-logo.jpg", "img/continental.png", "img/boeing.png", "img/tov.png", "img/kvaser.png",
    "img/dynojet.png", "img/us-energy.jpg", "img/gm.jpg", "img/canada.png", "img/math-works.jpg", "img/calepa.png",
    "img/clean-cities.jpg", "img/dspace.jpg", "img/a123.png", "img/freescale.jpg", "img/avl.jpg", "img/nsf.jpg",
    "img/etas.jpg", "img/snap-on.jpg", "img/trc.jpg", "img/magna.png", "img/bosch.jpg", "img/logo-crosschasm.png",
    "img/siemens.jpg", "img/cdadapco.png", "img/vector.png", "img/gkn.jpg", "img/Sensorsogo.png", "img/New Eagle_2013_website.jpg",
    "img/blackberry.png", "img/qnx.png", "img/woodward.png", "img/Gage_website.jpg", "img/delphi.png", "img/caterpillar.png",
    "img/ricardo.jpg", "img/proterra.jpg", "img/epa_logo-275x300.jpg"];

var sponsorLevels = ["Platinum Team", "Purple Team", "Green Team", "Headline Competition",
    "Diamond Competition", "Platinum Competition", "Gold Competition", "Silver Competition", "Bronze Competition"];

var sponsorNumber = [5, 4, 4, 2, 4, 5, 3, 4, 14];
var currentPosition = 0;
var sponsor = $('#sponsor');
sponsorBoard();

function sponsorBoard() {
    for (var i = 0; i < sponsorLevels.length; i++) {
        sponsor.append('<hr>');
        var level = sponsorLevels[i].split(" ");
        sponsor.append('<p class="level">' + level[0] + '</p>');
        if (level[1] == "Team") {
            sponsor.append('<p class="team">' + level[1] + ' Sponsor</p>');
        } else if (level[1] == "Competition") {
            sponsor.append('<p class="competition">' + level[1] + ' Sponsor</p>');
        }
        for (var j = 0; j < sponsorNumber[i]; j++) {
            sponsor.append('<a href="' + sponsorWebsite[currentPosition] + '"><img src="' + sponsorLinks[currentPosition] + '"></a>');
            currentPosition = currentPosition + 1;
        }
    }
}