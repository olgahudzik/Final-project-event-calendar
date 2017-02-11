$(function(){

function sliderAnimation() {

var prev = $('#prevPicture');
var next = $('#nextPicture');
var allPictures = $('.slider ul');
var index = 0;
var imageWidth = $('img').width();

console.log(imageWidth);

$('.slider ul').css('width', '2400');

next.on('click', function(){
  index++;

  if (index < 5) {
    console.log(index);
      allPictures.animate({left: '-=410'}, 500);
  }
});

prev.on('click', function(){
  index--;

  if (index > 0) {
    console.log(index);
    allPictures.animate({left: '+=410'}, 500);
  }
});

}
sliderAnimation();




});
