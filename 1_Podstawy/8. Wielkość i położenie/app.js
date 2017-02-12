$(function(){

//zad 1
var box = $('.box');
var newDiv = $("<div>Nowy box</div>");

function boxWidth(){

  var boxWidth = box.width();
  console.log(boxWidth);
  newDiv.width(boxWidth);
  box.after(newDiv);
}

boxWidth();

//zad 2
var menu = $('.menu');
var links = $('a');
var url


links.on('click', function(){

    var attrValue = $(this).attr('href');
    $("html,body").animate(
      { scrollTop:$(attrValue).offset().top}
    , 1000);


    var scroll = $(window).scrollTop();



 $(window).scroll(function() {
   var scroll = $(window).scrollTop)_;

   if(scrioll >= $('#contact').scrollTop()&& scroll <= $('#blog').scrollTop(){
     // podswietlanie kontaktu
   })
 })
});



});
