(function ($, window, document, undefined){
  'use strict';

  // WindowWidth
  var windowWidth = $(window).width();

  $(function () {

    // Banner carousel
    var bannerOwl = $('.banner');

    bannerOwl.owlCarousel({
        itemsCustom : [[0, 1]],
        navigation : false,
        autoPlay : true,
        pagination : true
    });

    bannerOwl.each(function() {
        //Find each set of dots in this carousel
      $(this).find('.owl-pagination .owl-page').each(function(index) {
        //Add one to index so it starts from 1
        $(this).attr('aria-label', index + 1);
      });
    });

    // Testimonial carousel
    var testimony = $('#testimony');
    testimony.owlCarousel({
        itemsCustom : [[768, 3],[0, 1]],
        navigation : true,
    });

    // To navigate from section to section
    $('a[href^=\'#\']').click(function(e){
      if(windowWidth > 767){
        $('body, html').stop().animate({scrollTop:$(this.hash).offset().top - headerHeightPlus}, 500);
      } else {
        $('body, html').stop().animate({scrollTop:$(this.hash).offset().top - headerHeight}, 500);
      }
      e.preventDefault();
    });


    //  Banner adjust as per Viewport
    var headerHeight = $('header').height();
    var headerHeightPlus = headerHeight + 10;

    $(window).scroll(function(){ if ($(this).scrollTop() > 20){
        if(windowWidth > 767){
          $('header').css({'height': headerHeight + 20 + 'px'});
        } else {
          $('header').css({'height': headerHeight + 'px'});
        }
      } else {
        $('header').css({'height': headerHeight + 'px'});
      }
    });
    // Active nav

    var navAnchor = $('nav li a');
    navAnchor.on('click', function(e) {
      e.preventDefault;
      navAnchor.removeClass();
      $(this).addClass('active');
    });

    // HTML5 Popup
    var vedioLink = $('.video-link'),
        overLay = $('.overlay');

    vedioLink.each(function() {

      var _this = $(this);
      _this.on('click', function() {
        overLay.fadeIn();
        var v = document.getElementsByTagName('video')[0];
        v.play();
      });

    });

    $('.overlay, .close-btn').on('click', function() {
      overLay.fadeOut();
      var v = document.getElementsByTagName('video')[0];
      v.stop();
    });

    // parallax
    $('.parallax').parallax();

    // Mobile Navigation

    var mobOpen = $('.nav-mob'),
        mobClose = $('.nav-close'),
        mobNav = $('.nav'),
        mobNavAnchor = $('.nav a');

    mobOpen.on('click', function() {
      mobNav.animate({'right':'0px'}, 500);
      $('body').css({'overflow':'hidden'});
    });

    mobClose.on('click', function() {
      mobNav.animate({'right':'-100%'}, 500);
      $('body').css({'overflow':'visible'});
    });

    if(windowWidth < 768){
      mobNavAnchor.on('click', function() {
        mobNav.animate({'right':'-100%'}, 500);
        $('body').css({'overflow':'visible'});
      });
    }

  });

})(jQuery, window, document);
