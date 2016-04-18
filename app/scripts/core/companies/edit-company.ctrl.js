"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.editCompaniesCtrl", function ($scope, companiesSrv) {

    if ($scope.editCompanyId === 'newCompany') {
      $scope.editCompany = {};
    } else {
      $scope.editCompany = angular.copy(companiesSrv.getOneCompanyById($scope.editCompanyId));
    }

    $scope.saveCompany = function (editCompany) {
      companiesSrv.saveCompany(editCompany);
      $scope.openCompanyForm()
    };

  });


}());
