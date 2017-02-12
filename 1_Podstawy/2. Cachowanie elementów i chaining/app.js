$(function(){

//zad 1 ( z nauczycielem)
var $nav = $('nav');

$nav.css('border','1px solid yellow').fadeOut('slow').slideDown(3000);

//zad 2 (samodzielne)
var $menu = $('.menu').find('li');
console.log($menu.first());
console.log($menu.last());
console.log($menu.eq(2));
});
