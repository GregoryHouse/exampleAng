"use strict";
(function () {
  angular.module('myApp.Users').controller("myApp.Users.editUsersCtrl", function ($scope, UsersSrv) {


    $scope.saveUser = function (form, editUser) {
      if (form.$valid) {
        //if (UsersSrv.unique(editUser.mail)) {
        UsersSrv.saveUpdateUser(editUser, function (resp) {

          if (editUser.id) {
            for (var i = 0; i < $scope.users.length; i++) {
              if ($scope.users[i].id === editUser.id) {
                $scope.users[i] = editUser;
                break;
              }
            }
          } else {
            $scope.users.push(resp)
          }

          $scope.tryToSave = true;
        });

        $scope.openUserForm()
      }
      //}
      else {
        $scope.tryToSave = true;
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


  angular.module('myApp.Users').directive('datePicker',
    function () {

      return {
        restrict: "A",
        controller: "myApp.Users.editUsersCtrl",
        link: function (scope, element) {
          $(element).datepicker({
            format: "dd.mm.yyyy"
          });
        }
      };
    });


}());
