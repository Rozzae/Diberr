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
    $(document).ready(function () {
        $('.fontfamily .dropdown').hover(function () {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
            }, function () {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
            });
        });
})();

$(function () {
    // $('.dropdown-menu').mouseover(function(e) {
    //   $('.dropdown-toggle').addClass("hovered");
    // });
    // $(".dropdown-menu").mouseout(function () {
    //   $(".dropdown-toggle").removeClass("hovered");
    // });
  
    // or optionally using .hover() for in/out handling as per A. Wolff's comment
    $(".dropmenu1").hover(function () {
      $(".drop1").addClass("hovered");
    }, function () {
      $(".drop1").removeClass("hovered");
    });


    $(".dropmenu2").hover(function () {
      $(".drop2").addClass("hovered");
    }, function () {
      $(".drop2").removeClass("hovered");
    });

    
    $(".dropmenu2").hover(function () {
      $(".drop2").addClass("hovered");
    }, function () {
      $(".drop2").removeClass("hovered");
    });


    $(".dropmenu3").hover(function () {
      $(".drop3").addClass("hovered");
    }, function () {
      $(".drop3").removeClass("hovered");
    });

    $(".dropmenu4").hover(function () {
      $(".drop4").addClass("hovered");
    }, function () {
      $(".drop4").removeClass("hovered");
    });

    $(".dropmenu5").hover(function () {
      $(".drop5").addClass("hovered");
    }, function () {
      $(".drop5").removeClass("hovered");
    });


  });

console.log("hey")

