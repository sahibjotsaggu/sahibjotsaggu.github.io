/* RequireJS Config File */

requirejs.config({
	baseUrl: "../js",
	paths: {
		jquery: [
			'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
			/* If the CDN fails, open the local file */
			'jquery'
		],
		bootstrap: [
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
			'bootstrap.min'
		],
		angular: [
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min',
			'angular.min'
		],
		angularsanitize: 'angular-sanitize.min',
		moment: 'moment.min'
	}
});

requirejs(['jquery', 'angular'], function($, angular) {
	$(document).ready(function() {
		alert("Hello World");
	});
});
