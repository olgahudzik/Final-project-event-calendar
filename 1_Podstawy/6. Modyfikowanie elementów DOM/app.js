$(function(){

//zad 1 z nauczycielem
  var newElement = $("<div>", {class:"panel"});

  $('.people').after(newElement);
  $('.panel').text('nowy element');


//zad 1 samodzielnie
var people = $('.people');
var button = $("[value='dodaj']");
var newElement = $("<li></li>");
var age = $('#age');
var listElements = $('.main li');

function addColor(age){


  if (age < 15) {
  newElement.css('background-color', 'green');
  }else if (age > 16 && age < 40) {
    newElement.css('background-color', 'blue');
  }else {
  newElement.css('background-color', 'brown');
  }
}

button.on('click', function(){
  var addUser = $('#addUser').val();
  var age = $('#age').val();
  newElement.attr('data-age', age);
  newElement.text(addUser);
  $('ul.main').append(newElement);

   addColor(age);
});
//zad 2 samodzielnie
var box = $('.where-i-am');

function addSpan() {
var append = $('<span>Jestem append</span>');
var prepend = $('<span>Jestem prepend</span>');
var before = $('<span>Jestem before</span>');
var after = $('<span>Jestem after</span>');

box.append(append);
box.prepend(prepend);
box.parent().after(after);
box.parent().before(before);

}
addSpan();




});
