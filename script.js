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

console.log("hey")

$(document).ready(function () {
  $('.fontfamily .dropdown').hover(function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
      }, function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
      });
  });