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
            .when('/contacts', {
                templateUrl: 'app/contacts.html',
                controller: 'contactsController'
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
                url: '#contacts'
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
