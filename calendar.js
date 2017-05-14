$(function(){

  var eventItem = $('.event');
  var body = $('body');
  var prev = $('.left');
  var next = $('.right');
  var monthLabel = $('.month');
  var allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];


//Funkcja sprawiajaca, ze po nacisnieciu w event wyskakuje formularz do rejestracji
  eventItem.on('click', function(){
      var eventName = $(this).data('name');
      var eventLink = $(this).data('url');
      var newDiv = $("<div class='newDiv'><form class='registerForm'><h1 class='green'>Express Your Interest!</h1><br><br><center>Fill in the form below to express you interest in the <b>" + eventName +"</b>. You will be automatically added to its standby list.</center><div class='inputsGroup'><label>First Name</label><input type='text' id='firstName'><br><label>Last Name</label><input type='text' id='lastName'><br><label>Email</label><input type='email' id='formEmail'><br><input type='submit' value='Count me in' class='formSubmit'><div></form><br><br><center><a href='" + eventLink +"' target='_blank' class='green'><b>Click Here</b></a> to be redirected<br> to the event website.</center><br><br><button class='close'>X Close</button></div>");

      body.append(newDiv);
      newDiv.addClass("fullScreen");


      var button = $('button');
      button.on('click', function(){
        newDiv.removeClass("fullScreen");
        body.remove(newDiv);
        button.addClass("nonDisplay");
      });

    });


// funkcja wyświetlająca komunikat potwierdzenia
  function formConfirmation() {

     $('body').find('.newDiv').empty();
     $('body').find('.newDiv').append('<div class="formConfirmation">Thank you, your information has been confirmed.<br> You are added to the event standby list.</div>');
     $('body').find('.formConfirmation').fadeOut(4000, function(){
       $('body').find('.newDiv').removeClass('formConfirmation').removeClass('fullScreen');
     });

  }


// Walidacja formularza do rejestracji i wysyłanie danych
  function validate(e) {
    var registerFirstName = $('body').find('#firstName').val();
    var registerLastName = $('body').find('#lastName').val();
    var registerEmail = $('body').find('#formEmail').val();
    var valid = true;
    //console.log(registerEmail)

    if(registerFirstName.length < 1)  {
      $('#firstName').after('<span class="error"><br>This field is required.</span>');
      valid = false;
    }

    if (registerLastName.length < 1) {
      $('#lastName').after('<span class="error"><br>This field is required.</span>');
      valid = false;
    }

    if (registerEmail.length < 4 || registerEmail.indexOf("@") === -1) {
      $('#formEmail').after('<span class="error"><br>This field needs to contain at least 5 characters and "@"</span>');
      valid = false;
   }
   if (valid) {
     var books = app.database().ref('books');
       books.push("PHP5");

       var commentsBooks = app.database().ref('comments/books');
       commentsBooks.push({
         first_name: registerFirstName,
         last_name: registerLastName,
         email: registerEmail,
       });

       formConfirmation();
   }
   return valid


}

// wywołanie walidacji i przesyłanie danych
$( document ).on( "click", ".formSubmit", function(e) {
    console.log("kalendarz");
    e.preventDefault();
    validate(e)
  });



  //Funkcja sluzaca przesuwaniu miesiecy kalendarza
    var April = $('#April');
    var May = $('#May');
    var June = $('#June');
    var July = $('#July');
    var August = $('#August');
    var September = $('#September');
    var October = $('#October');
    var November = $('#November');
    var December = $('#December');
    i = 3;
    next.on('click', function(){
      i++;
      monthLabel.text(allMonths[i] + ' 2017');

      if (allMonths[i]=="May"){
          April.addClass("nonDisplay");
        May.removeClass("nonDisplay");
      } else if (allMonths[i]=="April"){
        April.removeClass("nonDisplay");
        May.addClass("nonDisplay");
      } else if (allMonths[i]=="June") {
        June.removeClass("nonDisplay");
          May.addClass("nonDisplay");
      } else if (allMonths[i]=="July") {
        July.removeClass("nonDisplay");
        June.addClass("nonDisplay");
      } else if (allMonths[i]=="August") {
        August.removeClass("nonDisplay");
        July.addClass("nonDisplay");
      } else if (allMonths[i]=="September") {
        September.removeClass("nonDisplay");
        August.addClass("nonDisplay");
      } else if (allMonths[i]=="October") {
        October.removeClass("nonDisplay");
        September.addClass("nonDisplay");
      } else if (allMonths[i]=="November") {
        November.removeClass("nonDisplay");
        October.addClass("nonDisplay");
      } else if (allMonths[i]=="December") {
        December.removeClass("nonDisplay");
        November.addClass("nonDisplay");
      }


    });
    prev.on('click', function(){
      i--;
      monthLabel.text(allMonths[i] + ' 2017');

      if (allMonths[i]=="May"){
        May.removeClass("nonDisplay");
        June.addClass("nonDisplay");
      } else if (allMonths[i]=="April"){
        April.removeClass("nonDisplay");
        May.addClass("nonDisplay");
      } else if (allMonths[i]=="June") {
        June.removeClass("nonDisplay");
        July.addClass("nonDisplay");
      } else if (allMonths[i]=="July") {
        July.removeClass("nonDisplay");
        August.addClass("nonDisplay");
      } else if (allMonths[i]=="August") {
        August.removeClass("nonDisplay");
        September.addClass("nonDisplay");
      } else if (allMonths[i]=="September") {
        September.removeClass("nonDisplay");
        October.addClass("nonDisplay");
      } else if (allMonths[i]=="October") {
        October.removeClass("nonDisplay");
        November.addClass("nonDisplay");
      } else if (allMonths[i]=="November") {
        November.removeClass("nonDisplay");
        December.addClass("nonDisplay");
      } else if (allMonths[i]=="December") {
        December.removeClass("nonDisplay");
      }
    });


// konfiguracja zewnetrznej bazy danych firebase
var config = {
    apiKey: "AIzaSyC6gzX_vI0TuncvSL7GzPxePlYMF2Hy8Ec",
    databaseURL: "https://digital-marketing-calend-c5a5e.firebaseio.com",
};
var app = firebase.initializeApp(config);
});
