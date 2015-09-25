/**
 * Created by Ivy on 9/20/2015.
 */
"use strict";

var ecoCarApp = angular.module('ecoCarApp', ['ngRoute']);

ecoCarApp
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home.html',
                controller: 'homeController'
            })
            .when('/projects', {
                templateUrl: 'app/projects.html',
                controller: 'projectsController'
            })
            .when('/team', {
                templateUrl: 'app/team.html',
                controller: 'teamController'
            })
            .when('/sponsors', {
                templateUrl: 'app/sponsors.html',
                controller: 'sponsorsController'
            })
            .when('/media', {
                templateUrl: 'app/media.html',
                controller: 'mediaController'
            })
            .when('/ec2', {
                templateUrl: 'app/ec2.html',
                controller: 'ec2Controller'
            })
            .when('/contact', {
                templateUrl: 'app/contact.html',
                controller: 'contactsController'
            });
    })

    .controller('mainController', function($scope) {

    })

    .controller('homeController', function($scope) {

    })

    .controller('projectsController', function($scope) {

    })

    .controller('teamController', function($scope) {

    })

    .controller('sponsorsController', function($scope) {
        for (var i = 0; i < sponsorsList.length; i++) {
            $('#' + sponsorsList[i].level).append('<a href="' + sponsorsList[i].website + '"><img src="' + sponsorsList[i].logo + '"></a>');
        }
    })

    .controller('mediaController', function($scope) {

    })

    .controller('ec2Controller', function($scope) {

    })

    .controller('contactUsController', function($scope) {

    });
