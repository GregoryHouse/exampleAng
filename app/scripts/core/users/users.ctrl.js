"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Users.usersCtrl", function ($scope, usersSrv) {

    $scope.editUserId = '';
    $scope.usersSrv = usersSrv;
    $scope.users = $scope.usersSrv.getAllUsers();

    $scope.orderUsers = {
      predicate: 'firstName',
      reverse: false
    };

    $scope.order = function (predicate) {
      $scope.orderUsers.reverse = ($scope.orderUsers.predicate === predicate) ? !$scope.orderUsers.reverse : false;
      $scope.orderUsers.predicate = predicate;
    };

    $scope.openUserForm = function (userId) {
      if (!userId) {
        $scope.editUserId = '';
      } else if (userId === 'newUser') {
        $scope.editUserId = 'newUser';
      } else {
        $scope.editUserId = userId;
      }
    };

    $scope.deleteUser = function (editUser) {
      $scope.usersSrv.deleteUser(editUser);
    };
  });

}());


