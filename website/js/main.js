var app = angular.module('TaskManager', ['ngSanitize', 'ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '/templates/TaskList.html',
        controller: 'TaskListCtrl'
    }).
    when('/task/:id', {
        templateUrl: '/templates/TaskModal.html',
        controller: 'TaskModalCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);






/*
    app.controller('myCtrl', ['$http', '$scope', function($http, $scope) {
      // api call to get current user's id
        $http.jsonp("https://intranet-staging.klick.com:443/api/User/Current?callback=JSON_CALLBACK")
        .success(function(user) {
            var user_id = user.Entries[0].UserID;
            $scope.current_user_name = user.Entries[0].FirstName + " " + user.Entries[0].LastName;
           
            // with the user's id, getting the user's open tickets 
            $http.jsonp("https://intranet-staging.klick.com:443/api/Ticket/Filter?callback=JSON_CALLBACK&AssignedToUserID=" + user_id + "&TicketStatusIsOpen=true&MaxRecords=100")
            .success(function(data) {
                $scope.all_tasks = [];
                for (var x = 0; x < data.NumEntries; x++) {
                    var temp_info = {};
                    temp_info["title"] = data.Entries[x].Title;
                    if (temp_info["title"].length > 57) {
                        temp_info["title"] = temp_info["title"].substring(0, 57) + "...";
                    }
                    temp_info["task_id"] = data.Entries[x].TicketID;
                    temp_info["current_user"] = user_id;
                    $scope.all_tasks.push(temp_info);
                };
                $scope.showModal = function(id) {
                    $(".mymodal").addClass("mymodal-on");
                    $(".mymodal-shadow").addClass("mymodal-shadow-on");
                    $("body").css("overflow", "hidden");
                    $scope.modal_data = {};
                    $http.jsonp("https://intranet-staging.klick.com:443/api/Ticket/Comment?callback=JSON_CALLBACK&TicketID=" + id)
                    .success(function(comment) {
                        if (comment.NumEntries == 0) {
                            $scope.modal_data["has_comments"] = false;
                            $scope.modal_data["comment_info"] = [];
                        }
                        else {
                            $scope.modal_data["has_comments"] = true;
                            // convert the unix date stamp to a readable format using momentjs
                            for (var each_comment = 0; each_comment < comment.NumEntries; each_comment++) {
                                var c_time = comment.Entries[each_comment].Created;
                                comment.Entries[each_comment].Created = moment(c_time).fromNow();
                                var c_user_img = comment.Entries[each_comment].UserPhotoPath;
                                comment.Entries[each_comment].UserPhotoPath = "background: url('http://genome.klick.com" + c_user_img + "') no-repeat center center; background-size: cover;";
                            }
                            $scope.modal_data["comment_info"] = comment;
                        }
                        //console.log($scope.modal_data);
                    });
                    $http.jsonp("https://intranet-staging.klick.com:443/api/Ticket/Filter?callback=JSON_CALLBACK&TicketID=" + id)
                    .success(function(user_info) {
                        $scope.modal_data['task_id'] = id;
                        $scope.modal_data['task_desc'] = user_info.Entries[0].Description;
                        $scope.modal_data['task_title'] = user_info.Entries[0].Title;
                    });
                };
                $scope.addComment = function(taskid) {
                    var user_comment = $('.user-add-comment-tarea').val().replace(/\n/g, "<br />");
                    // do comment processing here and send back error if necessary
                    //...
                    // sending a post request to the genome API to post the comment
                    $.ajax({
                        url: "https://intranet-staging.klick.com/api/Ticket/Comment.json",
                        type: "POST",
                        data: {TicketID: parseInt(taskid), Comment: user_comment},
                        xhrFields: {
                            withCredentials: true
                        }
                    })
                    .done(function(stuff) {
                        console.log(stuff);
                    });
                };
            });
        });
    }]);*/
/*})();*/

