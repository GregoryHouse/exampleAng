"use strict";
(function () {
  angular.module("myApp.Companies").service('CompaniesSrv', ['$http', function ($http) {

    var CompaniesSrv = {
      saveUpdateCompany: saveUpdateCompany,
      deleteCompany: deleteCompany,
      getAllCompanies: getAllCompanies,
      getOneCompanyById: getOneCompanyById
      //unique: unique
    };

    function saveUpdateCompany(editCompany, callback) {

      return $http.post('/api/companies', editCompany)
        .then(function success(resp) {
          console.log('success', resp.data);
          if(callback){
            callback(resp.data)
          }
        }, function error() {
          return console.log('error');
        })
    }

    function deleteCompany(removeCompany, callback) {

      return $http.delete('/api/companies/' + removeCompany.id)
        .then(function success(resp) {
          if(callback){
            callback(resp.data)
          }
        })
    }

    function getAllCompanies(callback) {

      return $http.get('/api/companies')
        .then(function (resp) {
          if(callback){
            callback(resp.data)
          }
          return resp.data;
        })
    }

    function getOneCompanyById(companyId, callback) {

      return $http.get('/api/companies/'+companyId)
        .then(function (resp) {
          if(callback){
            callback(resp.data)
          }
          return resp.data;
        })
    }

    return CompaniesSrv;
  }]);

})();

