"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.companiesCtrl", function ($scope, CompaniesSrv) {

    $scope.editCompanyId = '';
    CompaniesSrv.getAllCompanies(function(resp){
      $scope.companies = resp;
    });

    $scope.orderCompany = {
      predicate: '',
      reverse: false
    };

    $scope.sortCompanies = function (predicate) {
      $scope.orderCompany.reverse = ($scope.orderCompany.predicate === predicate) ? !$scope.orderCompany.reverse : false;
      $scope.orderCompany.predicate = predicate;
    };

    $scope.openCompanyForm = function (companyId) {
      if (!companyId) {
        $scope.editCompanyId = '';
      } else if (companyId === 'newCompany') {
        $scope.editCompanyId = 'newCompany';
        $scope.editCompany = {};
      } else {
        CompaniesSrv.getOneCompanyById(companyId, function(resp){
          $scope.editCompany = angular.copy(resp);
          $scope.editCompanyId = companyId;
        });
      }

    };

    $scope.deleteCompany = function (editCompany) {
      CompaniesSrv.deleteCompany(editCompany, function(resp){
        for (var i = 0; i < $scope.companies.length; i++) {
          if ($scope.companies[i].id === resp.id) {
            $scope.companies.splice($scope.companies.indexOf($scope.companies[i]), 1);
            break;
          }
        }
      });
    };
  });

}());


