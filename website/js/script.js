(function() {
  var app = angular.module('testing', ['ngSanitize']);

    app.controller('myCtrl', ['$http', '$scope', function($http, $scope){
        $http.jsonp( "http://genome.klick.com/api/Ticket/Filter.json?callback=JSON_CALLBACK&AssignedToUserID=5652&TicketStatusIsOpen=true")
        .success(function(data) {
            console.log(data);
            $scope.tickets = data.Entries;
            $scope.ticketDesc = data.Entries[0].Description;
        });
    }]);
})();

$("document").ready(function() {



    $(".fab").click(function() {
        alert($(this).attr('id'));
    });

    $(".hamburger-icon").click(function() {
        openSidebar();
    });

    /*var hammertime = new Hammer(document.getElementById('face'));
    hammertime.on('panright', function() {
        openSidebar();
    });
    hammertime.on('panleft', function() {
        closeSidebar();
    });*/

    $(".page-shadow").click(function() {
        closeSidebar();
    });

    $(".search-icon-right").click(function() {
        $(this).css("display", "none");
        $(".navbar").css("background", "#FFF");
        $(".input-group").css("display", "block");
        $(".back-icon").css("display", "block");
        $(".close-icon-right").css("display", "block");
        $("#search-box").focus();
    });
    $(".close-icon-right").click(function() {
        $(this).css("display", "none");
        $(".navbar").css("background", "#3F51B5");
        $(".input-group").css("display", "none");
        $(".back-icon").css("display", "none");
        $(".search-icon-right").css("display", "block");
    })

    $(document).keyup(function(e) {
    //if (e.keyCode == 13) $('.save').click();     // enter
        if (e.keyCode == 27) {
            $(".close-icon-right").css("display", "none");
            $(".navbar").css("background", "#3F51B5");
            $(".input-group").css("display", "none");
            $(".back-icon").css("display", "none");
            $(".search-icon-right").css("display", "block");
        }
    });

    function openSidebar() {
        $(".sidebar").css("left", "0px");
        $(".page-shadow").css("left", "300px");
        $(".page-shadow").css("width", "calc(100% - 300px)");
        $(".page-shadow").css("z-index", "10000");
        $(".page-shadow").css("background-color", "rgba(0,0,0,0.5)");
        $("body").css("overflow-y", "hidden");
    }

    function closeSidebar() {
        $(".sidebar").css("left", "-300px");
        $(".page-shadow").css("left", "0px");
        $(".page-shadow").css("width", "100%");
        $(".page-shadow").css("background-color", "rgba(0,0,0,0)");
        $(".page-shadow").css("z-index", "-5");
        $("body").css("overflow-y", "auto");
    }

});
