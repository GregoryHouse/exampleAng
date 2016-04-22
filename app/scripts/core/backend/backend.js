angular.module('myApp')

  .config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })

  .run(function ($httpBackend) {

    var companies = [
      {
        name: "Samsung",
        addressCompany: "Seocho-daero",
        companyMail: "samsung@mail.com",
        yearFoundation: "24.03.1963",
        //clientUsers: [{id: "userId"}, {id: "userId"}, {id: "userId"}]
        id: createId()
      },
      {
        name: "Lenovo",
        addressCompany: "Apachi",
        companyMail: "lenovo@mail.com",
        yearFoundation: "12.03.1989",
        id: createId()
      },
      {
        name: "Apple",
        addressCompany: "Cupertino",
        companyMail: "apple@mail.com",
        yearFoundation: "31.11.1990",
        id: createId()
      }
    ];

    var users = [
      {
        firstName: "Jon",
        lastName: "Malkovich",
        company: {id: companies[0].id},
        birthDay: "24.03.1963",
        type: "user",
        mail: "jon@mail.com",
        id: createId()
      },
      {
        firstName: "Ivan",
        lastName: "Ivanov",
        company: {id: companies[0].id},
        birthDay: "27.08.1959",
        type: "user",
        mail: "petrov@mail.com",
        id: createId()
      },
      {
        firstName: "Petr",
        lastName: "First",
        company: {id: companies[0].id},
        birthDay: "08.12.1989",
        type: "admin",
        mail: "stpiter@mail.com",
        id: createId()
      }
    ];

    function userInCompany() {

      for (var j = 0, l = companies.length; j < l; j++) {
        companies[j].clients = [];

        for (var m = 0, k = users.length; m < k; m++) {
          if (companies[j].id === users[m].company.id) {
            companies[j].clients.push({userName: users[m].firstName, id: users[m].id});
          }
        }
      }
    }

    $httpBackend.whenGET('/api/companies').respond(function () {

      userInCompany();
      return [200, companies];
    });

    $httpBackend.whenGET(/^\/api\/companies\/\d+$/).respond(function (method, url, data, headers) {
      var regex = /^\/api\/companies\/(\d+)/g;

      var id = regex.exec(url)[1];

      for (var i = 0, l = companies.length; i < l; i++) {
        if (companies[i].id === id) {
          var company = companies[i];
          break;
        }
      }

      return [200, company];
    });


    $httpBackend.whenPOST('/api/companies').respond(function (method, url, data, headers) {
      var company = JSON.parse(data);
      if (company.id) {
        for (var i = 0, l = companies.length; i < l; i++) {
          if (companies[i].id === company.id) {
            companies[i] = company;
            break;
          }
        }
      } else {
        company.id = createId();
        companies.push(company)
      }

      return [201, company];
    });


    $httpBackend.whenDELETE(/^\/api\/companies\/\d+$/).respond(function (method, url, data, headers) {
      var regex = /^\/api\/companies\/(\d+)/g;

      var id = regex.exec(url)[1];

      for (var i = 0, l = companies.length; i < l; i++) {
        if (companies[i].id === id) {
          var index = companies.indexOf(companies[i]);
          var company = companies[i];
          companies.splice(index, 1);
          break;
        }
      }

      return [204, company];
    });

    $httpBackend.whenGET('/api/users').respond(200, users);

    $httpBackend.whenGET(/^\/api\/users\/\d+$/).respond(function (method, url, data, headers) {            id: createId()

      var regex = /^\/api\/users\/(\d+)/g;

      var id = regex.exec(url)[1];

      for (var i = 0, l = users.length; i < l; i++) {
        if (users[i].id === id) {
          var user = users[i];
          break;
        }
      }

      return [200, user];
    });


    $httpBackend.whenPOST('/api/users').respond(function (method, url, data, headers) {
      var user = JSON.parse(data);
      if (user.id) {
        for (var i = 0, l = users.length; i < l; i++) {
          if (users[i].id === user.id) {
            users[i] = user;
            break;
          }
        }
      } else {
        user.id = createId();
        users.push(user)
      }

      return [201, user];
    });

    $httpBackend.whenDELETE(/^\/api\/users\/\d+$/).respond(function (method, url, data, headers) {
      var regex = /^\/api\/users\/(\d+)/g;

      var id = regex.exec(url)[1];

      for (var i = 0, l = users.length; i < l; i++) {
        if (users[i].id === id) {
          var index = users.indexOf(users[i]);
          var user = users[i];
          users.splice(index, 1);
          break;
        }
      }

      return [204, user];
    });

    $httpBackend.whenGET(/\.html/).passThrough();
  });

function createId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(10)
      .substring(1);
  }

  return s4();
}



