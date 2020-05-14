$(document).ready(function() {




    // for keeping the nvbar fixed and appear while scrolling

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {offset:'60px;'}
    
    );

    // for 'i'm hungry' scroll 

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);




    });

    // for 'show me more' scroll 

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);




    });


    // for nav-links smooth scrolling

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });


    //   for feature section animation using waypoint

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__fadeIn')

    },{
        offset:'65%'

    });

    //   for how it works section (mobile phone) animation using waypoint

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__fadeInUp')

    },{
        offset:'65%'

    });

    //   for cities animation using waypoint

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__fadeIn')

    },{
        offset:'65%'

    });

    //   for plans animation using waypoint

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__pulse')

    },{
        offset:'65%'

    });

    //   navigation icon

    $('.js--nav-icon').click(function() {
        $('.js--nav-links').slideToggle(200);


    });



    // to add cross icon and complete the process:


    // $('.js--nav-icon').click(function() {

    //     var nav = $('.js--nav-links');
    //     var icon = $('.js--nav-icon i');


    //     nav.slideToggle(200);
    
    //     if (icon.hasClass('ion-navicon-round')) {
    //         icon.addClass('ion-close-round');
    //         icon.removeClass('ion-navicon-round');

    //     } else {
    //         icon.removeClass('ion-close-round');
    //         icon.addClass('ion-navicon-round');
    //     }

    // });



    



   

 












});
















