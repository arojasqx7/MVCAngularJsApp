var app = angular.module('MyApp', []);

app.controller('EmployeesController', function ($scope, $http) {

    $scope.Sort = function (col) {
        $scope.order = col;
        $scope.AscOrDesc = !$scope.AscOrDesc;
    }

    $scope.GetEmployees = function () {
        $http.get('/Employees/Index').then(function (response) {
            $scope.EmployeeData = response.data;
        });
    };



});