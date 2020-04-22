(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navscroll").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.navscroll').fadeIn();
            } else {
                $('.navscroll').fadeOut();
            }
        });
    });

});
  }(jQuery));