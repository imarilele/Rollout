
    (function($) {
    "use strict";
  
    $(document).ready(function() {
      $(".scroll").on("click", function() {
        var el = $(this).attr("href");
        $('html, body').animate({
          scrollTop: $(el).offset().top
        }, 2000);
      });
    });
  
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

  
  
  })(jQuery); 
  