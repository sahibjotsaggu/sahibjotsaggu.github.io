$(document).ready(function() {
    $(".down_arrow").click(function() {
        $("html, body").animate({
            scrollTop : $(".tile2").offset().top
        }, "easeOutBounce");
        return false;
    });
});
