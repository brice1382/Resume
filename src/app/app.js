(function () {
    'use strict';

    angular
        .module('brport', [
            'ngRoute',
            'ngResource',
            'ngMask',
            'sp-manager',
            'home',
            'about',
            'contact',
            'footer',
            'goal-details'
        ]).
        config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'hm'
            }).when('/about', {
                templateUrl: 'views/about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'abt'
            }).when('/contact', {
                templateUrl: 'views/contact/contact-tpl.html',
                controller: 'ContactCtrl',
                controllerAs: 'ctt'
            }).
            when('/about/goals/:id', {
                templateUrl: 'views/about/goals/goal-details.html',
                controller: 'GoalDetailsCtrl',
                controllerAs: 'goal'
            }).otherwise({redirectTo: '/home'});
    }])
})();
