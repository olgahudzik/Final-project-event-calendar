$(function(){

var questions = $('h1');
var answers = $('p');


// questions.on('click', function(){
//   $(this).next().toggle(200);
// });

questions.on('click', function(){
  answers.not($(this).next()).hide(200);
  
  if ($(this).next().hasClass('hide')) {
    $(this).next().removeClass('hide');
    $(this).next().show();
  }else {
    $(this).next().addClass('hide');
    $(this).next().hide();
  }
});


});
