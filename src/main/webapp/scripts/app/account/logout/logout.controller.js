'use strict';

angular.module('swdesignApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
