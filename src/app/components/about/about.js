var d3 = require('d3');


var app = angular.module('myApp.about', []);

app.controller('aboutCtrl',[function(){
    this.aboutText = 'This is the about component!';
}]);



app.directive('treasureMap', ['$rootScope', function($rootScope){
    return {
        scope: {
        },
        templateUrl: './app/components/about/treasureMap.html',
        link: function(scope, element, attrs) {

            var backgroundUrl = "http://www.europe-travel-guides.com/wp-content/uploads/2017/05/pirates-treasure-maps-loot-quests-2016-treasure-hunt-launch-follow-the-clues-spoils-go-for-kid.jpg";

            /* Prepare the Map */
            scope.containerStyle = {
                width: '1366px',
                height: '768px',
                backgroundImage: 'url('+backgroundUrl+')',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
            };


            // Draw GROUPS

            var svg = d3.select("#svg");

            var drag = d3.drag()
                .on('drag', function (d,i) {
                    d.x = d.x || 0;
                    d.y = d.y || 0;
                    d.x += d3.event.dx;
                    d.y += d3.event.dy;
                    d3.select(this).attr("transform", function (d, i) {
                        return "translate(" + [d.x,d.y] + ")";
                    })
                });



            var defs = svg
                .append("svg:defs");

            $rootScope.groups.forEach(function(group, index) {

                defs
                    .append('svg:pattern')
                    .attr('id', group.name+'_img')
                    // .attr('patternUnits', 'userSpaceOnUse')
                    .attr('width', 60)
                    .attr('height', 60)
                    .attr('x', 0)
                    .attr('y', 0)
                    .append('svg:image')
                    .attr('xlink:href', group.img)
                    .attr('width', 60)
                    .attr('height', 60)
                // .attr('preserveAspectRatio', 'none');

            });

            var circles = svg.selectAll("circle")
                .data($rootScope.groups)
                .enter()
                .append("circle");

            circles
                .attr("cx", 50)
                .attr("cy", function(d, index){return (50 + 60*index);})
                .attr("r", 30)
                .style("stroke", "black")
                .style("stroke-width", 2)
                .attr("fill", function(group, i){return "url(#"+group.name+"_img)"})
                .call(drag)







        }
    };
}]);
