$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    if ($('.panel-main').hasClass('panel-main--collapsed')) return;
    currentWidth = $('.panel-main').width();
    if (currentWidth < 960) {
      $('.panel-main').addClass('panel-main--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-main').css('max-width',currentWidth);
      $('.panel-main').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-main').addClass('panel-main--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

});