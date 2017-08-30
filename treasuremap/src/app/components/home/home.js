var d3 = require('d3');
require('angular-ui-bootstrap');

angular.module('myApp.home', [])
.controller('homeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

    /**
     * VARIABLES
     */
    $rootScope.groups = [];
    $scope.inputMask = {};

    /**
     * FUNCTIONS
     */

    $scope.addGroup = function() {
        var newGroup = { name: $scope.inputMask.groupName, step: 0 };
        $rootScope.groups.push(newGroup);
        console.log($rootScope.groups);
    }

    $scope.removeGroup = function(group) {
        var groupName = group.name;
        var toDelete;
        $rootScope.groups.forEach(function(group, index){
            if(group.name === groupName) {
                toDelete = index;
            }
        });
        if(toDelete !== undefined) {
            $rootScope.groups.splice(toDelete, 1);
        }
    }


    /* CONTROLS */






}]);