"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Users.editUsersCtrl", function ($scope, UsersSrv, CompaniesSrv) {

    if($scope.editUserId === 'newUser'){
      $scope.editUser = {};
    } else {
      $scope.editUser = UsersSrv.getOneUserById($scope.editUserId, function(resp){
        $scope.editUser = angular.copy(resp);
        $scope.editUserOrg = angular.copy(resp);
      });
    }

    $scope.saveUser = function (form) {
      if (form.$valid) {
        //if (UsersSrv.unique(editUser.mail)) {

        if($scope.editUser !== $scope.editUserOrg) {
          UsersSrv.saveUpdateUser($scope.editUser, function (resp) {

            if ($scope.editUser.id) {
              for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].id === $scope.editUser.id) {
                  $scope.users[i] = $scope.editUser;
                  break;
                }
              }
            } else {
              $scope.users.push(resp)
            }

            //$scope.tryToSave = true;
          });
        }
        $scope.openUserForm()
      }
      //}
      else {
        $scope.tryToSave = true;
      }
    };

    CompaniesSrv.getAllCompanies(function(resp){
      $scope.companies = resp;
      $scope.userCompany = "";
    });

    $scope.selectCompany = function(company){

      console.log(company)
      if($scope.editUser.company.id !== company.id) {
        $scope.userCompany = company.name;
        $scope.editUser.company = {id: company.id}
      } else {
        $scope.userCompany = company.name;
      }
    };

    $scope.isShowErrors = function (form, formFild) {
      return form && form[formFild] && (form[formFild].$dirty || form[formFild].$touched || $scope.tryToSave) && form[formFild].$invalid;
    }

  });


  //angular.module('myApp.Users').directive('uniqueEmail', ["UsersSrv",
  //  function(UsersSrv,$q) {
  //    var yes = function(n){
  //      console.log(UsersSrv.unique(n))
  //      return UsersSrv.unique(n)
  //    }
  //    return {
  //      restrict: "A",
  //      require: "ngModel",
  //      link: function(scope, element, attributes, ngModel) {
  //        ngModel.$asyncValidators.prime = function(modelValue) {
  //          //var defer = $q.defer();
  //          //$timeout(function(){
  //            if(yes(modelValue)) {
  //              //defer.resolve();
  //              console.log(yes(modelValue))
  //
  //            } else {
  //              //defer.reject();
  //              console.log(modelValue)
  //
  //            }
  //          //}, 2000);
  //          //return defer.promise;
  //        }
  //      }
  //    };
  //  }
  //]);





}());
