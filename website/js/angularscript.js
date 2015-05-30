/*define(['jquery', 'angular'], function($, angular) {
    (function() {
        var app = angular.module('Testing', []);
        app.controller('myCtrl', ['$http', '$scope', function($http, $scope){
            $http.jsonp("https://genome.klick.com:443/api/User/Current?callback=JSON_CALLBACK")
            .success(function(user) {
                var user_id = user.Entries[0].UserID;
                $http.jsonp("https://genome.klick.com:443/api/Ticket/Filter?callback=JSON_CALLBACK&AssignedToUserID=" + user_id + "&TicketStatusIsOpen=true&MaxRecords=100")
                .success(function(data) {
                    console.log(data);
                    $scope.all_tasks = [];
                    for (var x = 0; x < data.Entries.length; x++) {
                        var temp_info = {};
                        temp_info["title"] = data.Entries[x].Title;
                        if (temp_info["title"].length > 57) {
                            temp_info["title"] = temp_info["title"].substring(0, 57) + "...";
                        }
                        temp_info["task_id"] = data.Entries[x].TicketID;
                        temp_info["desc"] = data.Entries[x].Description;
                        $scope.all_tasks.push(temp_info);
                    }
                    $scope.showModal = function(id) {
                        $("#myModalLabel").text(id);
                        for (var each_task = 0; each_task < $scope.all_tasks.length; each_task++) {
                            if ($scope.all_tasks[each_task].task_id == id) {
                                $("#myModalLabel").text($scope.all_tasks[each_task].title);
                                $(".modal-body").html($scope.all_tasks[each_task].desc);
                            }
                        }
                    };
                });
            });
        }]);
    })();
});*/


'use strict';

define(['angular'], function(angular) {
    alert();
    var app = angular.module('testing', []) {}
    return angular.module('testing', []);
});