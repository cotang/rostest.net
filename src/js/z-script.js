// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* header раскрытие списка городов */
  $('.city__name').click(function(e) { 
      e.preventDefault();  
      $(this).closest('.city').find('.city__dropdown').toggle();
      $(this).closest('.city__name-wrapper').toggleClass('city__name-wrapper--active');
  });
  $('.city__dropdown').mouseleave(function(){
    $(this).fadeOut();
    $(this).closest('.city__name-wrapper').removeClass('city__name-wrapper--active');
  });
  $('.city__link').on('click', function(){
    $(this).closest('.city__name-wrapper').removeClass('city--active');
    $(this).closest('.city').find('.city__name').html($(this).html());
    $('.city__dropdown').hide(); 
    return false;
  });

  /* галерея "отзывы" */
  $('.reviews__gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* галерея "клиенты" */
  $('.clients__gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* sticky menu */
  var headerInner = $('.header__inner');
  var headerNav = $('.header__nav');
  $(window).scroll(function () {
    if ($(window).width() > 768) {
      if ($(this).scrollTop() >= headerInner.height() ) {
        $(headerNav).addClass('header__nav--sticky');
      } else {
        $(headerNav).removeClass('header__nav--sticky');
      }
    }
  });

  /* hamburger */
  $('.hamburger').click(function(e) { 
      e.preventDefault();    
      $('.nav__wrapper').toggle();
  });


  /* Review in the modal window */
  $('.review-slide__img').click( function(e){ 
    e.preventDefault(); 
    $('body').css({"overflow-y":"hidden"});   
    $('.modal').show();
    $(this).closest('.review-slide').find('.review-slide__modal').clone().appendTo($('.modal'))
    .show()
    .animate({opacity: 1}, 200); 
  });
  /* Close the modal window */
  $('.modal__overlay').click( function(){ 
    $('body').css({"overflow-y":"auto"});
    $(this).closest('.modal').find('.review-slide__modal')
      .animate({opacity: 0}, 200,  
        function(){
          $(this).remove();
          $('.modal').fadeOut(400);
        }
      );
  }); 


  // /* плавный скролл наверх */
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }


    var contactsHeight = $('.contacts-section').outerHeight();
    console.log(contactsHeight);
    if ($(window).width() > 768) {
      $('.contacts-section__map').css('height', contactsHeight+'px');
    }


    /* Map */
    $('.map').each(function (index, Element) {
        var map = new GMaps({
            el: Element,
            lat: 55.777494,
            lng: 37.643639,
            scrollwheel: false
        });
        map.addMarker({
            lat: 55.777494,
            lng: 37.643639,
        });
    });

});

