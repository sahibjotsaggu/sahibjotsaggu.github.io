(function() {
  var app = angular.module('testing', []);

  app.controller('MyController', function(){
    this.product = gem;
  });

  var gem = [
      {
        imgsrc: 'https://unsplash.imgix.net/photo-1425036458755-dc303a604201?fit=crop&fm=jpg&h=550&q=75&w=1050',
        heading: 'Space',
        desc: 'Still space photography located at the Yucatan Peninsula.'
    },
    {
        imgsrc: 'https://unsplash.imgix.net/photo-1429000263672-1b8b4008d2f7?fit=crop&fm=jpg&h=500&q=75&w=725',
        heading: 'Mountains',
        desc: 'Multi-coloured mountain photograph from the middle of the Atlantic Ocean straight from the Sahara Dessert.'
    }
    ];
})();


$("document").ready(function() {
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
