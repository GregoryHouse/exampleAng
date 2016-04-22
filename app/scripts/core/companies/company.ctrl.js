"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Companies.companyCtrl", function ($scope, UsersSrv, CompaniesSrv) {

    CompaniesSrv.getOneCompanyById($scope.company.id, function (resp) {
      $scope.usersNames = '';

      for (var i = 0; i < resp.clients.length; i++) {
        $scope.usersNames += resp.clients[i].userName + '; ';
      }
    })

  })

}());


