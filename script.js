$(document).ready(function() {
    $(".down_arrow").click(function() {
        $("html, body").animate({
            scrollTop : $(".tile2_wrapper").offset().top
        }, "easeOutBounce");
        return false;
    });
});
