app.factory('GenomeAPI', function($http) {
	var genome_endpoint = 'https://genome.klick.com:443/api/';// NEED TO CHANGE BACK TO 'INTRANET-STAGING' FOR POST REQUESTS
	
	function getCurrentUser() {
		return $http.jsonp(genome_endpoint + 'User/Current?callback=JSON_CALLBACK');
	}

	function getCurrentUserTasks(id) {
		return $http.jsonp(genome_endpoint + 'Ticket/Filter?callback=JSON_CALLBACK&AssignedToUserID=' + id + '&TicketStatusIsOpen=true&MaxRecords=100');
	}

	function getTaskInfo(task_id) {
		return $http.jsonp(genome_endpoint + 'Ticket/Filter?callback=JSON_CALLBACK&TicketID=' + task_id);
	}

	function getTicketComments(task_id) {
		return $http.jsonp(genome_endpoint + 'Ticket/Comment?callback=JSON_CALLBACK&TicketID=' + task_id);
	}

	function getNotifications() {
		return $http.jsonp(genome_endpoint + 'Notification/NotificationOnline?callback=JSON_CALLBACK');
	}
	
	return {
		user: getCurrentUser,
		user_tasks: getCurrentUserTasks,
		task_info: getTaskInfo,
		task_comments: getTicketComments,
		notifications: getNotifications
	};
});