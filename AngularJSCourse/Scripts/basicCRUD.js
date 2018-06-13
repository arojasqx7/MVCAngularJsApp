var app = angular.module('basicCRUD', []);

app.factory('CRUDFactory', function ($http) {

    CRUDobj = {};

    //Function to GetAll Departments
    CRUDobj.getAll = function () {
        var Depts;

        Depts = $http({ method: 'Get', url: '/Departments/Index' })
               .then(function (response) {
                return response.data;
        });

        return Depts;
    }

    //Function to Get Department By Id
    CRUDobj.getByDeptId = function (id) {
        var Dep;

        Dep = $http({
            method: 'Get',
            url: '/Departments/Details/'+id
        }).then(function (response)
            {
          return response.data;
            });

        return Dep;
    }

    //Function to Delete Department By Id
    CRUDobj.deleteDeptById = function (id) {
        var Dep;

        Dep = $http({
            method: 'Post',
            url: '/Departments/Delete/' + id
        }).then(function (response) {
            return response.data;
        });

        return Dep;
    }

    return CRUDobj;
});

app.controller('departmentsController', function ($scope, CRUDFactory) {
    CRUDFactory.getAll().then(function (result) {
        $scope.Depts = result;
    });

    $scope.GetByDeptId = function (id) {
        CRUDFactory.getByDeptId(id).then(function (result) {
            $scope.Dep = result;
        });
    }

    $scope.DeleteDeptById = function (id) {
        CRUDFactory.deleteDeptById(id).then(function (result) {
            $scope.Dep = result;

            CRUDFactory.getAll().then(function (result) {
                $scope.Depts = result;
            });
        });
    }
});