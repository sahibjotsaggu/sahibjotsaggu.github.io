$(document).ready(function() {

	$(".info_row_pic").css("height", $(".info_row_pic").width() + "px");

	/* clicking outside the dialog box(es) --> hide dialog box(es) */
	$(".dark_page").click(function() {
		$(".dark_page").css("display", "none");
		$("#signup_form").fadeOut();
		$("#login_form").fadeOut();
		$("body").css("overflow", "auto");
	});

	/* clicking the signup button --> show signup dialog */
	$("#getme_sign_butt").click(function() {
		$(".dark_page").css("display", "block");
		$("#signup_form").fadeIn();
		$("body").css("overflow", "hidden");
	});

	/* clicking the login button --> show login dialog */
	$("#getme_log_butt").click(function() {
		$(".dark_page").css("display", "block");
		$("#login_form").fadeIn();
		$("body").css("overflow", "hidden");
	});

	/* clicking the hamburger icon on mobile */
	$(".dd_menu").click(function() {
		if ($(".mobile_sidebar").css("right") != "0px") { 
			$(".mobile_sidebar").css("right", "0px");
		}
		else {
			$(".mobile_sidebar").css("right", "-85%");
		}
	});

	/* clicking the 'x' to close sidebar */
	$(".close_sidebar").click(function() {
		if ($(".mobile_sidebar").css("right") == "0px") {
			$(".mobile_sidebar").css("right", "-85%");
		}
	});

	/* this is just for testing purposes */
	$(window).resize(function() {
		$(".info_row_pic").css("height", $(".info_row_pic").width() + "px");
		$(".main_title a").text($(window).width());
		/*if ($(window).width() <= 1345) {
			$(".top_banner h1").text("Make it responsive!");
		}*/
	});

	var curr_val = 0;
	var prev_val = 2;

	$(".feat_camp_right").click(function() {
		if (curr_val + 1 <= 2) {
			curr_val += 1;
			prev_val = curr_val - 1;
		}
		else {
			curr_val = 0;
			prev_val = 2;
		}
		updateCarousel(prev_val, curr_val);
	});

	$(".feat_camp_left").click(function() {
		if (curr_val - 1 >= 0) {
			curr_val -= 1;
			prev_val = curr_val + 1;
		}
		else {
			curr_val = 2;
			prev_val = 0;
		}
		updateCarousel(prev_val, curr_val);

	});
});

function updateCarousel(pv, cv) {
	var all = ["first", "second", "third"];
	document.getElementById(all[pv]).style.display = "none";
	document.getElementById(all[pv] + "_dot").style.backgroundColor = "#DDD";
	document.getElementById(all[cv]).style.display = "block";
	document.getElementById(all[cv] + "_dot").style.backgroundColor = "#2B303B";
}