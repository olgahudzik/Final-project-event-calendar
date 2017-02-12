//zadanie 1 (z nauczycielem)

$(function(){

var $dt = $('dt');
$dt.on('museenter', function() {
  console.log($(this).text());

});

var $dt = $('dt');
$dt.on('mouseover', function() {
  console.log($(this).text());

});

var $dt = $('dt');
$dt.on('mousemove', function() {
  console.log($(this).text());

});

//zadanie 1 (samodzielnie)

var $buttons = $('.hero-buttons').find('button');
console.log($buttons);

function buttons(){
  var $Ironman = $($buttons.first());
  var $Thor = $($buttons.eq(1));
  var $Wolverine = $($buttons.last());

  $Ironman.on('click', function(){
    console.log("kliknięto mnie");
  });
  $Thor.one('click', function(){
    console.log("kliknięto mnie, ale już drugi raz nie dam się kliknąć");
  });
  $Wolverine.on('click', function(){
    $Ironman.off('click');
    $Thor.off('click');
  });

}
buttons();

//zad 2(samodzielnie)

var $section = $('.superhero-description');

var $dd = $('.superhero-description').find('dd');
var $dt = $('.superhero-description').find('dt');

$dd.hide();

$dt.on('click', function (){

$(this).next().slideToggle();

});

//zad 3

var $form = $('.login').find('input').last();
var $button = $('.show-hide-btn');

$button.on('click', function(){
  event.preventDefault();

  if($form.attr('type') == "password"){
    $form.attr('type', 'text');
  }else {
    $form.attr('type', 'password');
  }

});


//zad 4

var $menuElements = $('.menu').children();

$menuElements.on('mouseover', function(){
  console.log('Hura');
});

//zad 5
var $form = $('.login');
var $formInputs = $form.find('input');

$formInputs.on('focus', function(e){
  $form.css('box-shadow', '10px 10px 10px 10px rgba(0,0,0,0.75)')
}).on('blur', function(e){
  $form.css('background-color', "gray");
});

});
