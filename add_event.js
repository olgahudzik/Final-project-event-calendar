$(function(){

//Wyświetlanie formularza na klik w button
var addButton = $('.add');
var body  = $('body');
var addEventForm = $("<div class='newDiv'><form class='registerForm'><h1 class='green'>Feel free to add<br> a new event!</h1><center> Did you find any interesting digital marketing event?<br> Add it to our calendar!</center><div class='inputsGroup'><label>Event name</label><input type='text' id='eventName'><br><label>Country</label><input type='text' id='eventCountry'><br><label>City</label><input type='text' id='eventCity'><br><label>Date</label><input type='date' id='eventDate'><br><label>Event website</label><input type='text' id='eventURL'><input type='submit' value='Add Now' class='addformSubmit'><div></form><br><br><button class='close'>X Close</button></div>");

addButton.on('click', function() {
  body.append(addEventForm);
  addEventForm.addClass("fullScreen");
});

//Funkcja dodająca event w odpowiednie miejsce na kalendarzu - na podstawie daty

 function addToCalendar() {
   var date = $('body').find('#eventDate').val();
   console.log(date);
 }
  addToCalendar();

});
