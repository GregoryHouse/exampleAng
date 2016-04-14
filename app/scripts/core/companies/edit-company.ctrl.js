"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.editCompaniesCtrl", function ($scope, companiesSrv) {


    $scope.companiesSrv = companiesSrv;

    if ($scope.editCompanyId === 'newCompany') {
      $scope.editCompany = {};
    } else {
      $scope.editCompany = angular.copy($scope.companiesSrv.getOneCompanyById($scope.editCompanyId));
    }

    $scope.saveCompany = function (editCompany) {
      $scope.companiesSrv.saveCompany(editCompany);
      $scope.openCompanyForm()
    };

  });


}());
