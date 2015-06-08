$(document).ready(function() {
    $(".fab").click(function() {
        alert($(this).attr('id'));
    });

    $(".hamburger-icon").click(function() {
        openSidebar();
       
    });

    $(".page-shadow").click(function() {
        closeSidebar();
    });

    $(".search-icon-right").click(function() {
        $(this).css("display", "none");
        $(".navbar").css("background", "#FFF");
        $(".input-group").css("left", "70px");
        $(".back-icon").css("display", "block");
        $(".clear-icon-right").css("display", "block");
        $("#search-box").focus();
    });

    $(".dd-icon-right").click(function() {
        $(".dropdown ul").css("transform", "scale(1)");
    });

    $(".clear-icon-right").click(function() {
        $("#search-box").val("");
        $("#search-box").focus();
    });

    $(".back-icon").click(function() {
        $(this).css("display", "none");
        $(".clear-icon-right").css("display", "none");
        $(".navbar").css("background", "#F44336");
        $(".input-group").css("left", "-7000px");
        $(".back-icon").css("display", "none");
        $(".search-icon-right").css("display", "block");
    });

    $("body").click(function() {
        $(".dropdown").css("-webkit-transition", "scale(0)");
    });

    $(".close-modal").click(function() {
        console.log("closing modal.");
    })

    $(".mymodal-shadow").click(function() {
        $(".mymodal").removeClass("mymodal-on");
        $(".mymodal-shadow").removeClass("mymodal-shadow-on");
        $("body").css("overflow-y", "auto");
    });

    $(".user-add-comment-tarea").keypress(function() {
        $(".comment-send-button").css("background-position", "0px -237px");
    });

    $(document).keyup(function(e) {
    //if (e.keyCode == 13) $('.save').click();     // enter
        if (e.keyCode == 27) {
            $(".clear-icon-right").css("display", "none");
            $(".navbar").css("background", "#F44336");
            $(".input-group").css("left", "-7000px");
            $(".back-icon").css("display", "none");
            $(".search-icon-right").css("display", "block");
            $(".mymodal").removeClass("mymodal-on");
            $(".mymodal-shadow").removeClass("mymodal-shadow-on");
            $("body").css("overflow-y", "auto");
        }
    });

    function openSidebar() {
        $(".sidebar").addClass("sb-open");
        $(".page-shadow").addClass("ps-on");
    }

    function closeSidebar() {
        $(".sidebar").removeClass("sb-open");
        $(".page-shadow").removeClass("ps-on");
    }
});
