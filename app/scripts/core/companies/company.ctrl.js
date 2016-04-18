"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.companiesCtrl", function ($scope, companiesSrv) {

    $scope.editCompanyId = '';
    $scope.companies = $scope.companiesSrv.getAllCompanies();

    $scope.orderCompanies = {
      predicate: 'companyName',
      reverse: false
    };

    $scope.order = function (predicate) {
      $scope.orderCompanies.reverse = ($scope.orderCompanies.predicate === predicate) ? !$scope.orderCompanies.reverse : false;
      $scope.orderCompanies.predicate = predicate;
    };

    $scope.openCompanyForm = function (companyId) {
      if (!companyId) {
        $scope.editCompanyId = '';
      } else if (companyId === 'newCompany') {
        $scope.editCompanyId = 'newCompany';
      } else {
        $scope.editCompanyId = companyId;
      }

    };

    $scope.deleteCompany = function (editCompany) {
      companiesSrv.deleteCompany(editCompany);
    };
  });

}());


