"use strict";
(function () {
    angular.module('myApp.Users').controller("myApp.Users.editUsersCtrl", function ($scope, usersSrv) {

        console.log($scope);
        console.log($scope.editUserId)

        $scope.usersSrv = usersSrv;

        if ($scope.editUserId === 'newUser') {
            $scope.editUser = {};
        } else {
            $scope.editUser = angular.copy($scope.usersSrv.getOneUserById($scope.editUserId));
        }

        $scope.saveUser = function (editUser) {
            $scope.usersSrv.saveUser(editUser);
            $scope.openUserForm()
        };

    });


}());