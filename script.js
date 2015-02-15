$(document).ready(function() {
    $(".nav_button").click(function() {
        if ($(".nav_page").css("display") == "none") {
            $(".nav_button").css("background", "rgba(0,0,0,0.9)");
            $(".nav_page").fadeIn();
            $(".name").fadeOut();
            $(".quote").fadeOut();
            $(".nav_button div#middle").css("opacity", "0");
            $(".nav_button div#top").css("top", "25px");
            $(".nav_button div#top").css("transform", "rotateZ(-45deg)");
            $(".nav_button div#bottom").css("transform", "rotateZ(45deg)");
            $(".nav_button div#bottom").css("top", "25px");
        }
        else {
            $(".nav_button").css("background", "rgba(0,0,0,0.2)");
            $(".nav_page").fadeOut();
            $(".name").fadeIn();
            $(".quote").fadeIn();
            $(".nav_button div#middle").css("opacity", "1");
            $(".nav_button div#top").css("top", "15px");
            $(".nav_button div#top").css("transform", "rotateZ(0deg)");
            $(".nav_button div#bottom").css("transform", "rotateZ(0deg)");
            $(".nav_button div#bottom").css("top", "35px");
        }
    })
});
