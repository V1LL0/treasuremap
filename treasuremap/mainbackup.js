var angular = require("angular");
var uiBootstrap = require("ng-bootstrap");
// var uiRouter = require("ui-router");

var d3 = require("d3");


var app = angular.module('trasureMapApp', [
    "ui.router",
    "ui.bootstrap"
]);

app.controller('TreasureMapCtrl', ['$scope', function($scope) {

    /**
     * VARIABLES
     */
    $scope.groups = [];
    $scope.inputMask = {};


    /**
     * FUNCTIONS
     */

    $scope.addGroup = function() {
        var newGroup = { name: $scope.inputMask.groupName, step: 0 };
        $scope.groups.push(newGroup);
        console.log($scope.groups);
    }

    $scope.removeGroup = function(group) {
        var groupName = group.name;
        var toDelete;
        $scope.groups.forEach(function(group, index){
            if(group.name === groupName) {
                toDelete = index;
            }
        });
        if(toDelete !== undefined) {
            $scope.groups.splice(toDelete, 1);
        }
    }




    /* CONTROLS */


    /* Prepare the Map */
    var container = $(".map-container");
    container.width(1366);
    container.height(768);

    var backgroundUrl = "http://www.europe-travel-guides.com/wp-content/uploads/2017/05/pirates-treasure-maps-loot-quests-2016-treasure-hunt-launch-follow-the-clues-spoils-go-for-kid.jpg";
    container.css("background-image", "url("+backgroundUrl+")")
        .css("background-size", "contain")
        .css("background-repeat", "no-repeat")


    // Draw GROUPS
    var svg = d3.select("#svg");

    /*
     svg.append("circle")
     .attr("cx", 50)
     .attr("cy", 50)
     .attr("r", 30)
     .attr("fill", "red")


     console.log(container, svg);
     */




}]);



