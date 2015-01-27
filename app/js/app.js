'use strict';

/* App Module */

var testApp = angular.module('testApp', [
  'ngRoute',
  'testControllers'
]);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/people', {
        templateUrl: 'partials/people-list.html',
        controller: 'PeopleListCtrl'
      }).
      when('/people/:personName', {
        templateUrl: 'partials/people-detail.html',
        controller: 'PeopleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/people'
      });
  }]);
