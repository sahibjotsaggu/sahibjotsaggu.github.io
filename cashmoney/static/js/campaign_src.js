/*
Things to do:
- when the user comes back from the campaign preview page, input filled values.
- do error checking
*/

$(document).ready(function() {

	/*
	var all_sess_vars = ["user_camp_title", "user_camp_funding",
	"user_camp_image", "user_camp_tagline", "user_camp_description",
	"user_camp_duration"];
	var sess_counter = 0;
	for (var x = 0; x < all_sess_vars.length; x++) {
		alert(document.getElementById(all_sess_vars[x]).value);
	}
	/* checking if everything has been filled out */
	/*for (var x = 0; x < all_sess_vars.length; x++) {
		if (all_sess_vars[x] != undefined) {
			all_sess_vars[x] = 1;

		}
		else {
			all_sess_vars[x] = 0;
		}
	}*/

	//for (var y = 0; y < all_sess_vars.length)

	$(".camp_txtInp").change(function() {
		/* alert($(this).attr('id')); << USE THIS FOR ERROR CHECKING!! */
		if (document.getElementById($(this).attr('id')).value.length > 0) {
			$(this).css("border-bottom", "2px solid #2B303B");
			

		}
		else {
			$(this).css("background", "#FFF");
			$(this).css("border-bottom", "2px solid #CCC");
			$(this).css("color", "#2B303B");
		}
		if ($(this).attr('id') == "campaign_funding") {
			document.getElementById("campaign_funding").value = Math.floor(document.getElementById("campaign_funding").value);
			/* gotta fix this problem(s) later:
			- can't floor twice....*/
		}

		if ($(this).attr('id') == "campaign_title") {
			if (typeof(Storage) !== "undefined") {
				sessionStorage.user_camp_title = document.getElementById("campaign_title").value;
			}
			else {
				alert("Sorry, your browser does not support HTML5 localStorage.");
			}
		}

		if ($(this).attr('id') == "campaign_funding") {
			if (typeof(Storage) !== "undefined") {
				sessionStorage.user_camp_funding = document.getElementById("campaign_funding").value;
			}
			else {
				alert("Sorry, your browser does not support HTML5 localStorage.");
			}
		}

		if ($(this).attr('id') == "campaign_location") {
			if (typeof(Storage) !== "undefined") {
				sessionStorage.user_camp_location = document.getElementById("campaign_location").value;
			}
			else {
				alert("Sorry, your browser does not support HTML5 localStorage.");
			}
		}

		if ($(this).attr('id') == "campaign_tagline") {
			if (typeof(Storage) !== "undefined") {
				sessionStorage.user_camp_tagline = document.getElementById("campaign_tagline").value;
			}
			else {
				alert("Sorry, your browser does not support HTML5 localStorage.");
			}
		}		
	});

	$("#fileupload").change(function(){
		readURL(this);
		$("#pic_input_div").css("background-size", "cover");
		$("#pic_input_div").css("border", "2px solid #2B303B");
		$(".camp_inp_pic_wrapper").css("background", "url('static/img/checkmark.png') no-repeat center center");
	});

	/* camp duration */
	$(".camp_dur .camp_dur_list ul li").click(function() {
		var click_id = $(this).attr('id');
		$(".camp_dur .camp_dur_list ul li").css("background", "#FFF");
		$(".camp_dur .camp_dur_list ul li").css("color", "#2B303B");
		$(".camp_dur .camp_dur_list ul li").css("border-bottom", "2px solid #CCC");
		$("#" + click_id).css("background", "#2B303B");
		$("#" + click_id).css("color", "#FFF");
		$("#" + click_id).css("border-bottom", "2px solid #2B303B");
		if (typeof(Storage) !== "undefined") {
			sessionStorage.user_camp_duration = click_id;
		}
		else {
			alert("Sorry, your browser does not support HTML5 localStorage.");
		}
	});

	/* camp description */
	$("#camp_desc").change(function() {
		var txtarea_val = document.getElementById("camp_desc").value;
		if (txtarea_val.length > 0) {
			$(this).css("border", "1px solid #2B303B");
		}
		else {
			$(this).css("border", "1px solid #CCC");
		}
		if (typeof(Storage) !== "undefined") {
			sessionStorage.user_camp_description = txtarea_val;
		}
		else {
			alert("Sorry, your browser does not support HTML5 localStorage.");
		}
	});

	$(".camp_preview").click(function() {
		/* error checking here */
		window.location = "campaign_preview.html";
	});

});

/* getting the url of the img input and setting the img on the appropriate bg */
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			/*alert(e.target.result);  PERFORM ALGORITHM ON THIS TO ENSURE ONLY IMAGES!!!! */
			$("#pic_input_div").css("background-image", "url('" + e.target.result + "')");
			if (typeof(Storage) !== "undefined") {
				sessionStorage.user_camp_image = e.target.result;
			}
			else {
				alert("Sorry, your browser does not support HTML5 localStorage.");
			}
		}
		reader.readAsDataURL(input.files[0]);
	}
}