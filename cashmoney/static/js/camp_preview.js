$(document).ready(function() {
	var preview_image = sessionStorage.user_camp_image;
	$(".camp_picture").css("background", "url('" + preview_image + "') no-repeat center center");
	$(".camp_picture").css("background-size", "cover");
});