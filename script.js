$(document).ready(function() {

	//$(".loader_wrapper").delay(3000).fadeOut();

	var get_col_width = $(".container .row .col-md-12").width();
	$(".container .row .col-md-12").css("height", get_col_width + "px");


    $(".down_arrow").click(function() {
        $("html, body").animate({
            scrollTop : $(".tile2_wrapper").offset().top
        }, "easeOutBounce");
        return false;
    });

    // on window resize
    $(window).resize(function() {
		var get_col_width = $(".container .row .col-md-12").width();
		$(".container .row .col-md-12").css("height", get_col_width + "px");

    })



});



/*

@-webkit-keyframes load {
	0% {top: calc(50% + 64px); height: 0px;}
	100% {top: calc(50% - 50px); height: 100px;}
}*/