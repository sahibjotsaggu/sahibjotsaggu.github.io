/*app.factory('sharedProperties', function() {
	var ticketID;
	function getProperty() {
		return ticketID;
	}
	function setProperty(value) {
		ticketID = value;
	}
	function loadTicketInfo($scope, GenomeAPI, ticketID) {
		console.log(ticketID);
		GenomeAPI.task_comments(ticketID).success(function(comment) {
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
                /*$timeout(function() {

					$scope.$apply();
				}, 0);*/
            /*}
		});

		GenomeAPI.task_info(ticketID).success(function(user_info) {
		    $scope.modal_data['task_id'] = ticketID;
		    $scope.modal_data['task_desc'] = user_info.Entries[0].Description;
		    $scope.modal_data['task_title'] = user_info.Entries[0].Title;
		    console.log($scope.modal_data);
            /*$timeout(function() {
				$scope.$apply();
			}, 0);*/
		/*});
	}

	return {
		getProperty: getProperty,
		setProperty: setProperty,
		loadTicketInfo: loadTicketInfo
	}
})*/



app.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.message = '';

    sharedService.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});





















