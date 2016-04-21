"use strict";
(function () {
  angular.module('myApp.Companies').controller("myApp.Companies.editCompaniesCtrl", function ($scope, CompaniesSrv) {


    $scope.saveCompany = function (form, editCompany) {

      if (form.$valid) {
        CompaniesSrv.saveUpdateCompany(editCompany, function (resp) {

          if (editCompany.id) {
            for (var i = 0; i < $scope.companies.length; i++) {
              if ($scope.companies[i].id === editCompany.id) {
                $scope.companies[i] = editCompany;
                break;
              }
            }
          } else {
            $scope.companies.push(resp)
          }

          $scope.tryToSave = true;
        });

        $scope.openCompanyForm()
      }
      else {
        $scope.tryToSave = true;
      }
    };

    $scope.isShowErrors = function (form, formFild) {
      return form && form[formFild] && (form[formFild].$dirty || form[formFild].$touched || $scope.tryToSave) && form[formFild].$invalid;
    }

  });


}());
