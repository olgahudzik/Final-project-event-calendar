$(function(){

var buttons = $('button');
var progressBar = $('.progress-bar');


buttons.on('click', function(){
  var width = $(this).data('width');
  var color = $(this).data('color');
  var number = $(this).data('number');
  var span = $('.progress-bar span');
  var idname = '#bar'+ number;


$(idname).css('background-color', color).animate({width: width},1000);

});


});
