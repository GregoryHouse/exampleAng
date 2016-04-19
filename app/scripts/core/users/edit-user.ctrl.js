"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Users.editUsersCtrl", function ($scope, UsersSrv) {

    $(document).ready(function () {

      $('.data-picker').datepicker({
        format: "dd.mm.yyyy"
      });

    });



    if ($scope.editUserId === 'newUser') {
      $scope.editUser = {};
    } else {
      var editUser = UsersSrv.getOneUserById($scope.editUserId);
      $scope.editUser = angular.copy(editUser);
    }

    //$scope.$watch("editUser.mail", function() {
    //  console.log($scope.editUser.mail);
    //});

    $scope.saveUser = function (form, editUser) {
      if (form.$valid) {
        if (UsersSrv.unique(editUser.mail)) {
          UsersSrv.saveUser(editUser, function () {
            $scope.tryToSave = true;
          });
          $scope.openUserForm()
        }
      }
      else {
        $scope.tryToSave = true;
      }
    };

    $scope.isShowErrors = function (form, formFild) {
      return form && form[formFild] && (form[formFild].$dirty || form[formFild].$touched || $scope.tryToSave) && form[formFild].$invalid;
    }

  });

  angular.module('myApp.Users').directive('uniqueEmail', ["UsersSrv",
    function(UsersSrv,$q) {
      var yes = function(n){
        console.log(UsersSrv.unique(n))
        return UsersSrv.unique(n)
      }
      return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
          ngModel.$asyncValidators.prime = function(modelValue) {
            //var defer = $q.defer();
            //$timeout(function(){
              if(yes(modelValue)) {
                //defer.resolve();
                console.log(yes(modelValue))

              } else {
                //defer.reject();
                console.log(modelValue)

              }
            //}, 2000);
            //return defer.promise;
          }
        }
      };
    }
  ]);

}());
