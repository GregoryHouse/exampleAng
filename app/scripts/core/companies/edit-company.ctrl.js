"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.editCompaniesCtrl", function ($scope, CompaniesSrv) {

    if ($scope.editCompanyId === 'newCompany') {
      $scope.editCompany = {};
    } else {
      $scope.editCompany = angular.copy(CompaniesSrv.getOneCompanyById($scope.editCompanyId));
    }

    $scope.saveCompany = function (editCompany) {
      CompaniesSrv.saveCompany(editCompany);
      $scope.openCompanyForm()
    };

  });


}());
