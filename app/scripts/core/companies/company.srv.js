"use strict";
(function () {
  angular.module("myApp.Companies").service('companiesSrv', function () {

    var companies = [
      {companyName: "Samsung", addressCompany: "Seocho-daero", companyMail: "samsung@mail.com", yearFoundation: "24.03.1963", workers: "1000", id: createId()},
      {companyName: "Lenovo", addressCompany: "Apachi", companyMail: "lenovo@mail.com", yearFoundation: "12.03.1989", workers: "2000", id: createId()},
      {companyName: "Apple", addressCompany: "Cupertino", companyMail: "apple@mail.com", yearFoundation: "31.11.1990", workers: "13025", id: createId()},
      {companyName: "Motorola", addressCompany: "Something str", companyMail: "motorola@mail.com", yearFoundation: "01.08.1963", workers: "1000", id: createId()},
      {companyName: "Nokia", addressCompany: "Another str", companyMail: "nokia@mail.com", yearFoundation: "15.06.2000", workers: "115", id: createId()},
      {companyName: "Acer", addressCompany: "Privat str", companyMail: "acer@mail.com", yearFoundation: "10.01.201", workers: "987", id: createId()}
    ];

    return {

      saveCompany: function (editCompany) {

        if (editCompany.id) {
          for (var i = 0; i < companies.length; i++) {
            if (companies[i].id === editCompany.id) {
              companies[i] = editCompany;
              break;
            }
          }
        } else {
          editCompany.id = createId();
          companies.push(editCompany);
        }
      },

      deleteCompany: function (editCompany) {
        companies.splice(companies.indexOf(editCompany), 1);
      },

      getAllCompanies: function () {
        return companies;
      },

      getOneCompanyById: function (companyId) {

        for (var i = 0; i < companies.length; i++) {
          if (companies[i].id === companyId) {
            return companies[i];
          }
        }
      }

    }
  });


  function createId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

})();

