var app = angular.module('ServiceApp', []);

//Service Method
app.service('CalcService', function () {   
    this.add = function (a, b) { return a + b; };
    this.sub = function (a, b) { return a - b; };
    this.mul = function (a, b) { return a * b; };
    this.div = function (a, b) { return a / b; };
});

//Factory Method 
app.factory('CalcFactory', function () {
    fact = {};
    fact.add = function (a, b) { return parseInt(a) + parseInt(b); };
    fact.sub = function (a, b) { return parseInt(a) - parseInt(b); };
    return fact;
});


app.controller('svcController', function ($scope, CalcFactory) {
    $scope.Add = function (a, b) {
        $scope.result = CalcFactory.add(parseInt(a), parseInt(b));
    }

    $scope.Sub = function (a, b) {
        $scope.result = CalcFactory.sub(parseInt(a), parseInt(b));
    }
});