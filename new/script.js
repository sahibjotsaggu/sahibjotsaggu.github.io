// JavaScript Document

$(document).ready(function() {

	var pic_height = $("#pic1").css("height");
	$("#pic1").css("line-height", pic_height);
	$("#pic2").css("line-height", pic_height);
	$("#pic3").css("line-height", pic_height);
	$("#pic4").css("line-height", pic_height);

	
	function animate_slideshow() {
		var delay = 4000;
		var t = 1000;
		$("#slideshow").animate({'left' : '0%'}, t).delay(delay).animate({'left' : '-100%'}, t).delay(delay).animate({'left' : '-200%'}, t).delay(delay).animate({'left' : '-300%'}, t).delay(delay);
	}

	for (var x = 0; x < 100; x++) {
		animate_slideshow();
	}
});