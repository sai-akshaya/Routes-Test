'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('PeopleListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('people/people.json').success(function(data) {
      $scope.people = data;
    });

   
  }]);

testControllers.controller('PeopleDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.personName = $routeParams.personName;
  }]);
