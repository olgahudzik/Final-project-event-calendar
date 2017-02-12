$(function(){

//zad 1
$('.cart-item button').on('click', function(){

    $(this).closest('.cart-item').toggleClass('cart-updated');

    $(this).toggleClass('added');

});


//zad 2
var expand= $('.films a.expand');
var close = $('.films a.close');
var description = $('.container');

expand.on('click', function(){
  $(this).parent().siblings().fadeIn('100');
});

close.on('click', function(){
  description.fadeOut('100');
});

//zad 3

var links = $('a');

links.each(function(){

$(this).attr('href', 'http://coderslab.pl/');

});


});
