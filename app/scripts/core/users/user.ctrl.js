"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Users.userCtrl", function ($scope, UsersSrv, CompaniesSrv) {
    //console.log($scope.user)

    CompaniesSrv.getOneCompanyById($scope.user.company.id, function(resp){
      $scope.userCompany = resp
    });
  })

}());


