$(function(){

var navigation = $('nav');
var menu = $('ul.menu');
var positionFixed  = $('.sticky');
var top = menu.offset();
var topValue = top.top;

$(window).on('scroll', function(){
  var position = $(window).scrollTop();

  if (position >= topValue) {
    menu.addClass('sticky');
  }else {
    menu.removeClass('sticky');
  }
});

$(window).on('resize', function(){
  var position = $(window).scrollTop();
  // var top = menu.offset();
  // var topValue = top.top;
  console.log(topValue);
  console.log(position);

  if (position = topValue) {
    menu.addClass('sticky');
  }else {
    menu.removeClass('sticky');
  }
});

});
