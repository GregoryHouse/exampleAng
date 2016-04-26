"use strict";
(function () {
  angular.module("myApp", ["myApp.Users", "myApp.Companies", "ui.router", 'ngMessages', 'ui.bootstrap', 'ngAnimate'])

    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function ($stateProvider) {

        $stateProvider
          .state('users', {
            url: "/users",
            controller: "myApp.Users.usersCtrl",
            templateUrl: "scripts/core/users/users.tpl.html"
          })
          //  .state('users.edit', {
          //    url: "/editUser",
          //    templateUrl: "scripts/core/users/edit-user-form.tpl.html"
          //  })
          //
          //.state('users.newUser', {
          //  url: "/newUser",
          //  templateUrl: "scripts/core/users/edit-user-form.tpl.html"
          //})

          .state('companies', {
            url: "/companies",
            controller: "myApp.Companies.companiesCtrl",
            templateUrl: 'scripts/core/companies/companies.tpl.html'
          });
        //.state('companies.edit', {
        //  url: "/editCompany",
        //  templateUrl: "scripts/core/companies/edit-company-form.tpl.html"
        //})
        //
        //.state('companies.newCompany', {
        //  url: "/newCompany",
        //  templateUrl: "scripts/core/companies/edit-company-form.tpl.html"
        //})

      }]);

  angular.module('myApp').directive('datePicker',
    function () {

      return {
        restrict: "A,E,C",
        link: function (scope, element) {
          $(function () {
            $(element).datepicker({
              format: "dd.mm.yyyy"
            });
          });
        }
      };
    });

})();
