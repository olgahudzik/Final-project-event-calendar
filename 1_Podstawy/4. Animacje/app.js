$(function(){

//zad 1
var $buttons = $('button');

$buttons.on('click', function(){
  console.log($(this).text());
});


//zad 1
var $content = $('.content');

$content.on('click', function(event){
  $(this).
  animate({
    'opacity': 0.5
  },2000)
  .animate({
    'opacity': 1
  },700);
});

//zad 2

$sectionButtons = $('.buttons');
$firstButton = $buttons.first();
$secondButton = $buttons.eq(1);
$thirdButton = $buttons.eq(2);
$images = $('.images');
$firstImage = $('.img1');
$secondImage = $('.img2');
console.log($images, $firstImage, $secondImage);

$firstButton.on('click', function(){
  $content.show('slow');
});

$secondButton.on('click', function(){
  $content.hide('slow');
});

$thirdButton.on('click', function(){
  $content.toggle('slow');
});

function fadeInFadeOut(){
  $secondImage.hide('slow');
  $firstImage.on('click', function(){
    $(this).hide('slow');
    $secondImage.show('slow');
  });
}
fadeInFadeOut();

//zad 3
var arrow = $('.arrow-down');
var list = $('.select-body');
console.log(arrow, list);

arrow.on('click', function(){
  list.toggle('slow');
  if (list.css('display')=='block'){
    arrow.removeClass('arrow-down');
    arrow.addClass('arrow-up');
  }else {
    arrow.removeClass('arrow-up');
    arrow.addClass('arrow-down');
  }
});

//zad 4
var runningElement = $('.running-element');
var button = $('.running-element div');

runningElement.on('click', function(){
  button.css('position', 'relative');
  button.animate({
      right:"20px",
  }, 2000, console.log("Przesuwanie zakończone"));
});

});
