app.controller('TaskListCtrl', ['$scope', 'GenomeAPI', function($scope, GenomeAPI) {

    GenomeAPI.user().success(function(data) {
    	$scope.userid = data.Entries[0].UserID;

	    GenomeAPI.user_tasks($scope.userid).success(function(tasks) {
	    	$scope.all_tasks = [];
	        for (var x = 0; x < tasks.NumEntries; x++) {
	            var temp_info = {};
	            temp_info.title = tasks.Entries[x].Title;
	            if (temp_info.title.length > 57) {
	                temp_info.title = temp_info.title.substring(0, 57) + "...";
	            }
	            temp_info.task_id = tasks.Entries[x].TicketID;
	            $scope.all_tasks.push(temp_info);
	        }
	    });

    });

    /*$scope.showMyModal = function(id) {
    	sharedProperties.setProperty(id);
    	
    	/*var TaskCtrl = $scope.$new();
    	var taskid = taskModal.showModal(id);
    	$controller('TaskCtrl', {$scope: TaskCtrl});
    	TaskCtrl.loadTicketInfo(taskid);*/
    /*};*/
}]);

/*
app.controller('TaskListCtrl', ['$scope', 'mySharedService', function($scope, mySharedService) {
	$scope.showMyModal = function(id) {
		mySharedService.prepForBroadcast(id);
	};
	$scope.$on('handleBroadcast', function() {
		$scope.message = mySharedService.message;
	});
}]);*/