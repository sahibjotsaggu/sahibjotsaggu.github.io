(function() {
  var app = angular.module('bindHtmlExample', ['ngSanitize']);

    app.controller('ExampleController', ['$http', '$scope', function($http, $scope){
        $scope.data = [
            {
                name: "Sahibjot", age: 18
            },
            {
                name: "Bob", age: 69
            }
        ]
        $scope.number = 5;
        $scope.getNumber = function(num) {return "hrsa"}
    }]);
})();
