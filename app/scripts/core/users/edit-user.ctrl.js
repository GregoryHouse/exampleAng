"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Users.editUsersCtrl", function ($scope, usersSrv,validation) {

    if ($scope.editUserId === 'newUser') {
      $scope.editUser = {};
    } else {
      $scope.editUser = angular.copy(usersSrv.getOneUserById($scope.editUserId));
    }

    $scope.saveUser = function (editUser, valid) {
      if (valid) {
        usersSrv.saveUser(editUser);
        $scope.openUserForm()
      } 
      else {
        $scope.inValid = function () {
          return (validation.isValidName(), validation.isValidMail())
        }
      }
    }
  });

  angular.module('myApp.Users').factory('validation', function () {

    return {
      isValidName: function () {
        document.querySelector("input.first-name").classList.add('has-error');
        return true
      },
      isValidMail: function () {
        document.querySelector("input.user-email").classList.add('has-error');
        return true
      }
    }
  })


}());
