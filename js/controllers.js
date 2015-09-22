/**
 * Created by Ivy on 9/20/2015.
 */
"use strict";

var ecoCarApp = angular.module('ecoCarApp', ['ngRoute', 'door3.css', 'ngAnimate']);

ecoCarApp
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home.html',
                controller: 'homeController',
                css: 'css/home.css'
            })
            .when('/projects', {
                templateUrl: 'app/projects.html',
                controller: 'projectsController',
                css: 'css/projects.css'
            })
            .when('/team', {
                templateUrl: 'app/team.html',
                controller: 'teamController',
                css: 'css/team.css'
            })
            .when('/sponsors', {
                templateUrl: 'app/sponsors.html',
                controller: 'sponsorsController',
                css: 'css/sponsors.css'
            })
            .when('/media', {
                templateUrl: 'app/media.html',
                controller: 'mediaController',
                css: 'css/media.css'
            })
            .when('/ec2', {
                templateUrl: 'app/ec2.html',
                controller: 'ec2Controller',
                css: 'css/ec2.css'
            })
            .when('/contact', {
                templateUrl: 'app/contact.html',
                controller: 'contactsController',
                css: 'css/contact.css'
            });
    })

    .controller('mainController', function($scope) {
        $scope.navLinks = [
            {
                name: 'Home',
                url: '#/'
            },
            {
                name: 'Projects',
                url: '#projects'
            },
            {
                name: 'Team',
                url: '#team'
            },
            {
                name: 'Sponsors',
                url: '#sponsors'
            },
             {
                name: 'Media',
                url: '#media'
            },
            {
                name: 'Apply',
                url: 'https://catalyst.uw.edu/catalyst/chooser/1d95b7f6290c057640861012dec50856'
            },
            {
                name: 'EC2',
                url: '#ec2'
            },
            {
                name: 'Contact Us',
                url: '#contact'
            }
        ];
    })

    .controller('homeController', function($scope) {

    })

    .controller('projectsController', function($scope) {

    })

    .controller('teamController', function($scope) {

    })

    .controller('sponsorsController', function($scope) {

    })

    .controller('mediaController', function($scope) {

    })

    .controller('ec2Controller', function($scope) {

    })

    .controller('contactUsController', function($scope) {

    });
