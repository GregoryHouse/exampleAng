"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.companyCtrl", function ($scope, UsersSrv, CompaniesSrv) {


    CompaniesSrv.getOneCompanyById($scope.company.id, function (resp) {
      $scope.clientsCompany = resp.clients.length;

      $scope.companyClients = resp.clients;
      $scope.companyUsers = [];

      for (var j = 0, l = $scope.companyClients.length; j < l; j++) {
        UsersSrv.getOneUserById($scope.companyClients[j].id, function (resp) {
          $scope.companyUsers.push({firstName: resp.firstName, lastName: resp.lastName});
        });
      }
    });


  })



}());


