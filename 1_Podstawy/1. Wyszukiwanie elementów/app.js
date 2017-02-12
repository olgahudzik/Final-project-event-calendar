$(function(){
  $('section').addClass('backgroundElement');
  var $nav = $('.links').find('nav');
  $nav.addClass('hover-effect');

  var $list = $('.main').find('li');
  $list.addClass('borderClass');
  $list.addClass('colorText backgroundElement').fadeOut('slow').fadeIn('slow');
  $list.find('a').css('color', 'red');

  var $bullets = $('.menu').find('li');
  $bullets.addClass('redLinks');
  $bullets.first().css( "font-size", "30px" );

  $('h1').addClass('creepyHeader');
});
