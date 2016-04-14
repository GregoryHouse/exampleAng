"use strict";
(function () {
  angular.module("myApp", ["myApp.Users","myApp.Companies", "ngRoute"])

    .config(function ($routeProvider) {
    $routeProvider
      .when('/users', {
          templateUrl: 'scripts/core/users/users.tpl.html',
          controller: 'myApp.Users.usersCtrl'
      })

      .when('/companies', {
        templateUrl: 'scripts/core/companies/companies.tpl.html',
        controller: 'myApp.Companies.companiesCtrl'
      })


  });


  //.config([
  //  '$stateProvider',
  //  '$urlRouterProvider',
  //  function ($stateProvider, $urlRouterProvider) {
  //
  //    $stateProvider
  //      .state('users', {
  //        url: "/users",
  //        templateUrl: "scripts/core/users/users.tpl.html"
  //      })
  //      .state('companies', {
  //        url: "/companies",
  //        templateUrl: 'scripts/core/'
  //      })
  //
  //      .state('users/edituser', {
  //        url: "#/users/edituser",
  //        views: {
  //          '': { templateUrl: "scripts/core/users/users.tpl.html" },
  //          "lol": { templateUrl: "scripts/core/users/edit-user-form.tpl.html" },
  //
  //        }
  //      })
  //
  //
  //  }]);

})();
