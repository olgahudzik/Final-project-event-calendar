$(function(){

var button = $("<button>Usuń</button>");
var buttonAdd = $("[value='dodaj']");
var listElements = $('li');
var newElement = $("<li></li>");

listElements.append(button);

buttonAdd.on('click', function(){

});

listElements.on('click','button', function(){
    $(this).parent().remove();
  });


});
