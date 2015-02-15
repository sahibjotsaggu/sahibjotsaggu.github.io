$(document).ready(function() {
    $(".nav_button").click(function() {
        if ($(".nav_page").css("display") == "none") {
            $(".nav_page").fadeIn();
            $(".nav_button div#middle").css("opacity", "0");
            $(".nav_button div#top").css("top", "25px");
            $(".nav_button div#top").css("transform", "rotateZ(-45deg)");
            $(".nav_button div#bottom").css("transform", "rotateZ(45deg)");
            $(".nav_button div#bottom").css("top", "25px");
        }
        else {
            $(".nav_page").fadeOut();
            $(".nav_button div#middle").css("opacity", "1");
            $(".nav_button div#top").css("top", "15px");
            $(".nav_button div#top").css("transform", "rotateZ(0deg)");
            $(".nav_button div#bottom").css("transform", "rotateZ(0deg)");
            $(".nav_button div#bottom").css("top", "35px");
        }
    })
});
