app.controller('HeaderCtrl', ['$scope', 'GenomeAPI', function($scope, GenomeAPI) {
	GenomeAPI.user().success(function(data) {
        $scope.current_user_name = data.Entries[0].FirstName + " " + data.Entries[0].LastName;
    });
}]);

