// if ($(window).width() > 992) {
//     $(window).scroll(function(){  
//        if ($(this).scrollTop() > 40) {
//           $('#navbar').addClass("fixed-top");
//           // add padding top to show content behind navbar
//           $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
//         }else{
//           $('#navbar').removeClass("fixed-top");
//            // remove padding top from body
//           $('body').css('padding-top', '0');
//         }   
//     });
//   }


// $(document).ready(function(){
//     $(selector).toggleClass('fas fa-plus fas fa-minus');
//   });

// $('.fontfamily .dropdown-item').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
// });

(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            console.log("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });
})();

console.log("hey")

$(document).ready(function () {
  $('.fontfamily .dropdown').hover(function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
      }, function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
      });
  });