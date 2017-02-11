$(function(){

function sliderAnimation() {

var prev = $('#prevPicture');
var next = $('#nextPicture');
var allPictures = $('.slider li');
var index = 0;
var imageWidth = $('img').width();


allPictures.first().clone().appendTo($('ul.slider'));
allPictures.eq(5).clone().prependTo($('ul.slider'));

$('div').width(imageWidth);

next.on('click', function(){
  index++;
  allPictures.animate({left: '-=400'}, 500);

  if (index == 7) {
    allPictures.animate({right: '-=2800'}, 500);
  }
});

prev.on('click', function(){
  index--;
  allPictures.animate({right: '-=400'}, 500);

  if (index == 7) {
    allPictures.animate({left: '-=2800'}, 500);  
  }
});

sliderAnimation();




});
