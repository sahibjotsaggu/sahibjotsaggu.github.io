app.controller('TaskModalCtrl', ['$http', '$scope', '$routeParams', 'GenomeAPI', function($http, $scope, $routeParams, GenomeAPI) {
	console.log("g");

	GenomeAPI.task_comments($routeParams.id).success(function(comment) {
		$scope.modal_data = {};
		if (comment.NumEntries === 0) {
			$scope.modal_data.has_comments = false;
			$scope.modal_data.comment_info = [];
		}
		else {
			$scope.modal_data.has_comments = true;
            // convert the unix date stamp to a readable format using momentjs
            for (var each_comment = 0; each_comment < comment.NumEntries; each_comment++) {
                var c_time = comment.Entries[each_comment].Created;
                comment.Entries[each_comment].Created = moment(c_time).fromNow();
                var c_user_img = comment.Entries[each_comment].UserPhotoPath;
                comment.Entries[each_comment].UserPhotoPath = "background: url('http://genome.klick.com" + c_user_img + "') no-repeat center center; background-size: cover;";
            }
		}
		$scope.modal_data.comment_info = comment;
		console.log($scope.modal_data);
	});

	GenomeAPI.task_info($routeParams.id).success(function(user_info) {
		    $scope.modal_data.task_id = $routeParams.id;
		    if (user_info.Entries[0].Description.length === 0) {
		    	$scope.modal_data.task_desc = "No description here.";
		    }
		    else {
			    // adding anchor tags to all valid hyperlinks using the Autolinker.js lib
			    $scope.modal_data.task_desc = Autolinker.link(user_info.Entries[0].Description);
			}
		    $scope.modal_data.task_title = user_info.Entries[0].Title;
	});

	/*$scope.loadTicketInfo = function(taskid) {
		console.log(taskid);
		GenomeAPI.task_comments(taskid).success(function(comment) {
			$scope.modal_data = {};
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
                $timeout(function() {

					$scope.$apply();
				}, 0);
            }
		});

		GenomeAPI.task_info(taskid).success(function(user_info) {
		    $scope.modal_data['task_id'] = taskid;
		    $scope.modal_data['task_desc'] = user_info.Entries[0].Description;
		    $scope.modal_data['task_title'] = user_info.Entries[0].Title;
		    console.log($scope.modal_data);
            $timeout(function() {
				$scope.$apply();
			}, 0);
		});
	};*/
	
}]);