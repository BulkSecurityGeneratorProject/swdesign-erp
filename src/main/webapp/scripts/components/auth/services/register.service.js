'use strict';

angular.module('swdesignApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


