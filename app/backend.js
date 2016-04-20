angular.module('myApp')

  .config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .run(function ($httpBackend) {
    var users = [
      {
        firstName: "Jon",
        lastName: "Malkovich",
        birthDay: "24.03.1963",
        type: "user",
        mail: "jon@mail.com",
        id: createId()
      },
      {
        firstName: "Ivan",
        lastName: "Petrov",
        birthDay: "27.08.1959",
        type: "user",
        mail: "petrov@mail.com",
        id: createId()
      },
      {
        firstName: "Petr",
        lastName: "First",
        birthDay: "08.12.1989",
        type: "admin",
        mail: "stpiter@mail.com",
        id: createId()
      },
      {
        firstName: "Jaina",
        lastName: "Frost",
        birthDay: "18.01.1970",
        type: "admin",
        mail: "jaina@mail.com",
        id: createId()
      },
      {
        firstName: "Flesh",
        lastName: "Gordon",
        birthDay: "14.06.1975",
        type: "user",
        mail: "flesh@mail.com",
        id: createId()
      },
      {
        firstName: "Bary",
        lastName: "Alen",
        birthDay: "01.01.1991",
        type: "admin",
        mail: "baryalen@mail.com",
        id: createId()
      }
    ];

    $httpBackend.whenGET('/api/users').respond(200, users);

    $httpBackend.whenGET(/^\/api\/users\/\d+\-\d+\-\d+\-\d+\-\d+$/).respond(function (method, url, data, headers) {
      var regex = /^\/api\/users\/(\d+\-\d+\-\d+\-\d+\-\d+)/g;

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

    //$httpBackend.whenPUT(/^\/api\/users\/\d+\-\d+\-\d+\-\d+\-\d+$/).respond(function (method, url, data, headers) {
    //  var user = JSON.parse(data);
    //  console.log(user.id)
    //  for (var i = 0, l = users.length; i < l; i++) {
    //    if (users[i].id === user.id) {
    //      users[i] = user;
    //      break;
    //    }
    //    if (i === l - 1) {
    //      users.push(user)
    //    }
    //  }
    //
    //  return [200, user];
    //});


    $httpBackend.whenDELETE(/^\/api\/users\/\d+\-\d+\-\d+\-\d+\-\d+$/).respond(function (method, url, data, headers) {
      var regex = /^\/api\/users\/(\d+\-\d+\-\d+\-\d+\-\d+)/g;

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
  })
;

function createId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(10)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
