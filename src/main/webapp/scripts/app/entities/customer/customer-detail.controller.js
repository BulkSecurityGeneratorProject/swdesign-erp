'use strict';

angular.module('swdesignApp')
    .controller('CustomerDetailController', function ($scope, $stateParams, Customer) {
        $scope.customer = {};
        $scope.load = function (id) {
            Customer.get({id: id}, function(result) {
              $scope.customer = result;
            });
        };
        $scope.load($stateParams.id);
    });
