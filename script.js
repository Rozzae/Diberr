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

(function () {
  var startingTime = new Date().getTime();
  // Load the script
  var script = document.createElement('SCRIPT');
  script.src =
    'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    } else {
      window.setTimeout(function () {
        checkReady(callback);
      }, 20);
    }
  };

  // Start polling...
  checkReady(function ($) {
    $(function () {
      var endingTime = new Date().getTime();
      var tookTime = endingTime - startingTime;
      console.log('jQuery is loaded, after ' + tookTime + ' milliseconds!');
    });
  });
  //this code makes dropdown occur on hover rather than on click
  $(document).ready(function () {
    $('.fontfamily .dropdown').hover(
      function () {
        $(this)
          .find('.dropdown-menu#mainnavmenu')
          .first()
          .stop(true, true)
          .slideDown(150);
      },
      function () {
        $(this)
          .find('.dropdown-menu#mainnavmenu')
          .first()
          .stop(true, true)
          .slideUp(105);
      }
    );
    $('.acepmpfinaldrop .dropdown').hover(
      function () {
        $(this)
          .find('.dropdown-menu#acedropmenu')
          .first()
          .stop(true, true)
          .slideDown(150);
      },
      function () {
        $(this)
          .find('.dropdown-menu#acedropmenu')
          .first()
          .stop(true, true)
          .slideUp(105);
      }
    );
  });
  (function () {
    $('.dropdown-toggle').click(
      function (e) {
        e.stopPropagation();
        return false;
      },
      function () {
        e.stopPropagation();
        return false;
      }
    );
  });

  $(document).on('click', '.fontfamily .dropdown', function (e) {
    e.stopPropagation();
  });
  $('.dropdown-toggle').on('click', '.fontfamily .dropdown', function (e) {
    e.stopPropagation();
  });

  $('.dropdown-toggle').click(
    function (e) {
      e.stopPropagation();
      return false;
    },
    function (e) {
      e.stopPropagation();
      return false;
    }
  );

  $('#acedropmenu').hover(
    function () {
      $('.dropace').addClass('hoveredace');
    },
    function () {
      $('.dropace').removeClass('hoveredace');
    }
  );
  // $('.dropdown-toggle').hover(
  //   function () {
  //     $('.drop1').removeClass('currentpagetoggle');
      
  //   },
  //   function () {
  //     $('.drop1').addClass('currentpagetogglehover');
      
  //   },
  // );
  $('.dropmenu1').hover(
    function () {
      $('.drop1').addClass('hovered');
      $('.drop1').addClass('currentpagetogglehover');
      
    },
    function () {
      $('.drop1').removeClass('hovered');
      $('.drop1').removeClass('currentpagetogglehover');
      
    }
  );

  $('.dropmenu2').hover(
    function () {
      $('.drop2').addClass('hovered');
    },
    function () {
      $('.drop2').removeClass('hovered');
    }
  );

  $('.dropmenutwo').hover(
    function () {
      $('.droptwo').addClass('hovered');
    },
    function () {
      $('.droptwo').removeClass('hovered');
    }
  );

  $('.dropmenu3').hover(
    function () {
      $('.drop3').addClass('hovered');
    },
    function () {
      $('.drop3').removeClass('hovered');
    }
  );

  $('.dropmenu4').hover(
    function () {
      $('.drop4').addClass('hovered');
    },
    function () {
      $('.drop4').removeClass('hovered');
    }
  );

  $('.dropmenu5').hover(
    function () {
      $('.drop5').addClass('hovered');
    },
    function () {
      $('.drop5').removeClass('hovered');
    }
  );
  $('.dropmenu6').hover(
    function () {
      $('.drop6').addClass('hovered');
    },
    function () {
      $('.drop6').removeClass('hovered');
    }
  );
  $('.dropmenu7').hover(
    function () {
      $('.drop7').addClass('hovered');
    },
    function () {
      $('.drop7').removeClass('hovered');
    }
  );
  $('.dropmenu8').hover(
    function () {
      $('.drop8').addClass('hovered');
    },
    function () {
      $('.drop8').removeClass('hovered');
    }
  );
  $('.dropmenu9').hover(
    function () {
      $('.drop9').addClass('hovered');
    },
    function () {
      $('.drop9').removeClass('hovered');
    }
  );
  $('.dropmenu10').hover(
    function () {
      $('.drop10').addClass('hovered');
    },
    function () {
      $('.drop10').removeClass('hovered');
    }
  );

  $('#serviceList').click(function () {
    $(this)
      .find('.servicedrop')
      .toggleClass('icon-chevron-down icon-chevron-up');
  });
})();

$(function () {
  $('#boxesspacing').on('click', function () {
    $(this).toggleClass('fas fa-arrow-up fas fa-arrow-down');
  });

  // $('.dropdown-menu').mouseover(function(e) {
  //   $('.dropdown-toggle').addClass("hovered");
  // });
  // $(".dropdown-menu").mouseout(function () {
  //   $(".dropdown-toggle").removeClass("hovered");
  // });

  // or optionally using .hover() for in/out handling as per A. Wolff's comment
});

$(document).ready(function () {
  $('#accordionExample .collapse')
    .on('shown.bs.collapse', function () {
      $(this)
        .parent()
        .find('.fa-arrow-up')
        .removeClass('fa-arrow-up')
        .addClass('fa-arrow-down')
        .find('.fa-plus')
        .removeClass('fa-plus')
        .addClass('fa-minus');
    })
    .on('hidden.bs.collapse', function () {
      $(this)
        .parent()
        .find('.fa-arrow-down')
        .removeClass('fa-arrow-down')
        .addClass('fa-arrow-up')
        .find('.fa-minus')
        .removeClass('fa-minus')
        .addClass('fa-plus');
    });
});

$(document).ready(function () {
  $('#accordionExample .collapse')
    .on('shown.bs.collapse', function () {
      $(this)

        .find('.fa-plus')
        .removeClass('fa-plus')
        .addClass('fa-minus');
    })
    .on('hidden.bs.collapse', function () {
      $(this)

        .find('.fa-minus')
        .removeClass('fa-minus')
        .addClass('fa-plus');
    });
});
