"use strict";
(function () {
    angular.module("myApp.Users").service('usersSrv', function () {

        var users =  [
            {firstName: "Jon", lastName: "Malkovich", birthDay: "24.03.1963", type: "user", mail: "jon@mail.com", id: createId()},
            {firstName: "Ivan", lastName: "Petrov", birthDay: "27.08.1959", type: "user", mail: "petrov@mail.com", id: createId()},
            {firstName: "Petr", lastName: "First", birthDay: "08.12.1989", type: "admin", mail: "stpiter@mail.com", id: createId()},
            {firstName: "Jaina", lastName: "Frost", birthDay: "18.01.1970", type: "admin", mail: "jaina@mail.com", id: createId()},
            {firstName: "Flesh", lastName: "Gordon", birthDay: "14.06.1975", type: "user", mail: "flesh@mail.com", id: createId()},
            {firstName: "Bary", lastName: "Alen", birthDay: "01.01.1991", type: "admin", mail: "baryalen@mail.com", id: createId()}
        ];

        return {

            saveUser: function(editUser){

                if (editUser.id) {
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].id === editUser.id) {
                            users[i] = editUser;
                            break;
                        }
                    }
                } else {
                    editUser.id = createId();
                    users.push(editUser);
                }
            },

            deleteUser: function(editUser){
                users.splice(users.indexOf(editUser), 1);
            },

            getAllUsers: function(){
                    return users;
            },

            getOneUserById: function (userId) {

                    for (var i = 0; i < users.length; i++) {
                        if (users[i].id === userId) {
                            return users[i];
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

