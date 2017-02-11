$(function(){

var tabs = $('.tabs li');
var text = $('.tabs div');

tabs.css('display', 'inline-block');

tabs.on('click', function(){

  data = $(this).data('class');
  $(data).fadeIn('slow');

});



});
