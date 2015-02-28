$(document).ready(function() {

	//$(".loader_wrapper").delay(3000).fadeOut();

    $(".tile2_wrapper .projects_wrapper #projects_list div").css("height", $("#projects_list").width()*(9/16));

	var get_col_width = $(".projects_wrapper .projects_list ul li").width();
    $(".projects_wrapper .projects_list ul li").css("height", get_col_width);


    $(".down_arrow").click(function() {
        $("html, body").animate({
            scrollTop : $(".tile2_wrapper").offset().top
        }, "easeOutBounce");
        return false;
    });

    // on window resize
    $(window).resize(function() {
		var get_col_width = $(".projects_wrapper .projects_list ul li").width();
        $(".projects_wrapper .projects_list ul li").css("height", get_col_width);

        $("#greeting").text($(window).width());
        $(".tile2_wrapper .projects_wrapper #projects_list div").css("height", $("#projects_list").width()*(9/16));

    })



});



/*

@-webkit-keyframes load {
	0% {top: calc(50% + 64px); height: 0px;}
	100% {top: calc(50% - 50px); height: 100px;}
}*/