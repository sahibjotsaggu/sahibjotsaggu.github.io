$(document).ready(function() {

	$(".loader_wrapper").delay(3000).fadeOut();

    $(".down_arrow").click(function() {
        $("html, body").animate({
            scrollTop : $(".tile2_wrapper").offset().top
        }, "easeOutBounce");
        return false;
    });
});



/*

@-webkit-keyframes load {
	0% {top: calc(50% + 64px); height: 0px;}
	100% {top: calc(50% - 50px); height: 100px;}
}*/