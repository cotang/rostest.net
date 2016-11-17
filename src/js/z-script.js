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


  // $('.nav__link--dropdown').click(function(e) { 
  //     e.preventDefault();
  //     $(this).closest('.header').find('.menu-services').show();
  // });

  // $('.menu-services__close').click(function(e) { 
  //     e.preventDefault();
  //     $(this).closest('.menu-services').hide();
  // });

  // var servicesMoreLink = $('.services-type__item--more .services-type__link');
  // $(servicesMoreLink).click(function(e) { 
  //     e.preventDefault();
  //     $(this).closest('.services-type__item--more').hide();
  //     $(this).closest('.services-type__list').find('.services-type__item--hidden').show();
  // });

  // /* Faq accordion */
  // $('.faq__ask').click(function(){
  //   if($(this).next('.faq__answer').is(":visible")) {
  //     $(this).next('.faq__answer').slideUp();
  //     $(this).closest('.faq__block').find('.faq__icon--active').removeClass('faq__icon--active');
  //   } else {
  //     $(this).closest('.faq').find('.faq__answer').slideUp();
  //     $(this).siblings('.faq__answer').slideDown();
  //     $(this).closest('.faq').find('.faq__icon--active').removeClass('faq__icon--active');
  //     $(this).closest('.faq__block').find('.faq__icon').addClass('faq__icon--active');
  //   }
  // }); 


  // /* search */
  // $('.social-links__link--search').click(function(e) { 
  //     e.preventDefault();    
  //     $('.search').show();
  // });
  // $('.search__close').click(function(e) { 
  //     e.preventDefault();    
  //     $('.search').hide();
  // });

  // /* плавный скролл наверх */
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });

  // /* hamburger */
  // $('.hamburger').click(function(e) { 
  //     e.preventDefault();    
  //     $('.nav__wrapper').toggle();
  // });


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }


    var contactsHeight = $('.contacts').outerHeight();
    console.log(contactsHeight);
    $('.contacts__map').css('height', contactsHeight+'px');

    /* Map */
    var map = new GMaps({
        el: '.contacts__map',
        lat: 59.971198,
        lng: 30.315121,
        scrollwheel: false
    });
    map.addMarker({
        lat: 59.971198,
        lng: 30.315121,
    });

});

