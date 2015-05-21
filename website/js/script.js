(function() {
  var app = angular.module('testing', []);

  app.controller('MyController', function(){
    this.product = gem;
  });

  var gem = [
      {
        imgsrc: 'https://unsplash.imgix.net/photo-1425036458755-dc303a604201?fit=crop&fm=jpg&h=550&q=75&w=1050',
        heading: 'Space',
        id: 'first',
        desc: 'Still space photography located at the Yucatan Peninsula.'
    },
    {
        imgsrc: 'https://unsplash.imgix.net/photo-1429000263672-1b8b4008d2f7?fit=crop&fm=jpg&h=500&q=75&w=725',
        heading: 'Mountains',
        id: 'second',
        desc: 'Multi-coloured mountain photograph from the middle of the Atlantic Ocean straight from the Sahara Dessert.'
    },
    {
        imgsrc: 'https://ununsplash.imgix.net/photo-1427434846691-47fc561d1179?fit=crop&fm=jpg&h=700&q=75&w=1050',
        heading: 'Farm',
        id: 'three',
        desc: 'Kids playing around in a hay field filled with hay.'
    }
    ];
})();


$("document").ready(function() {
    $(".fab").click(function() {
        alert($(this).attr('id'));
    });

    $(".hamburger-icon").click(function() {
        $(".sidebar").css("z-index", "10005");
        $(".sidebar").css("left", "0px");
        /*$(".page-shadow").css("left", "300px");
        /*$(".page-shadow").css("width", "calc(100% - 300px)");*/
        $(".page-shadow").css("z-index", "10000");
        $(".page-shadow").css("background-color", "rgba(0,0,0,0.5)");
    });

    $(".page-shadow").click(function() {
        $(".sidebar").css("left", "-300px");
        /*$(".page-shadow").css("left", "0px");*/
        /*$(".page-shadow").css("width", "100%");*/
        $(".page-shadow").css("background-color", "rgba(0,0,0,0)");
        $(".page-shadow").css("z-index", "-5");
    });


    $(".search-icon-right").click(function() {
        $(this).css("display", "none");
        $(".input-group").css("display", "block");
        $(".close-icon-right").css("display", "block");
        $("#search-box").focus();
    });
    $(".close-icon-right").click(function() {
        $(this).css("display", "none");
        $(".input-group").css("display", "none");
        $(".search-icon-right").css("display", "block");
    })
    $(document).keyup(function(e) {
    //if (e.keyCode == 13) $('.save').click();     // enter
        if (e.keyCode == 27) {
            $(".input-group").css("display", "none");
            $(".close-icon-right").css("display", "none");
            $(".search-icon-right").css("display", "block");
        }
    });
});

function greet() {
    alert();
}
