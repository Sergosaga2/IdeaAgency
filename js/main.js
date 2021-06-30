$(document).ready(function(){
  $(function(){
      $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname) {
              var $target = $(this.hash);
              $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
              if ($target.length) {
                  var targetOffset = $target.offset().top;
                  $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                  return false;
              }
          }
      });
  });
  
  $('.head-btn').on('click', function () {
    $(this).toggleClass('head-btn_active');
    $('.dropdown').toggleClass('dropdown_active');
    $('body').toggleClass('body-dropdown');
  });

  var scrollHeader;
  window.onscroll = function() {
      scrollHeader = window.pageYOffset || document.documentElement.scrollTop;
      if(scrollHeader > 120){
          $("header").addClass('header-scroll');
      }
      if(120 > scrollHeader){
          $("header").removeClass('header-scroll'); 
      };
  };

  $(".owl-carousel").owlCarousel({
  	items: 1,
  	dots: true
  });

    let tab = $('.section');
    tab.on('click', function(event) {
  		event.preventDefault();
  		let activeContent = $(this).attr('href');
  		$('.visible').toggleClass('visible');
  		$(activeContent).toggleClass('visible');
  		$('.section-active').toggleClass('section-active');
  		$(this).toggleClass('section-active');
  	});


    $('.input-name').on('focus', function() {
      $('.input-placeholder-name').addClass('input-placeholder_active');
      $('.input-block-stick-name').addClass('input-block-stick_active');
    });
    $('.input-email').on('focus', function() {
      $('.input-placeholder-email').addClass('input-placeholder_active');
      $('.input-block-stick-email').addClass('input-block-stick_active');
    });
    $('.input-phone').on('focus', function() {
      $('.input-placeholder-phone').addClass('input-placeholder_active');
      $('.input-block-stick-phone').addClass('input-block-stick_active');
    });
    $('textarea').on('focus', function() {
      $('.textarea-placeholder').addClass('textarea-placeholder_active');
    });

    $('.input-name').on('blur', function() {
      if($(this).val() == '')
      $('.input-placeholder-name').removeClass('input-placeholder_active');
      $('.input-block-stick').removeClass('input-block-stick_active');
    });
    $('.input-email').on('blur', function() {
      if($(this).val() == '')
      $('.input-placeholder-email').removeClass('input-placeholder_active');
      $('.input-block-stick').removeClass('input-block-stick_active');
    });
    $('.input-phone').on('blur', function() {
      if($(this).val() == '')
      $('.input-placeholder-phone').removeClass('input-placeholder_active');
      $('.input-block-stick').removeClass('input-block-stick_active');
    });
    $('textarea').on('blur', function() {
      if($(this).val() == '')
      $('.textarea-placeholder').removeClass('textarea-placeholder_active');
    });
});