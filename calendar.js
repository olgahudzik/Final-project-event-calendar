$(function(){

  var eventItem = $('.event');
  var body = $('body');
  var prev = $('.left');
  var next = $('.right');
  var monthLabel = $('.month');
  var allMonths = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"];

console.log(prev,next,monthLabel, allMonths);


//Funkcja sprawiajaca, ze po nacisnieciu w event wyskakuje formularz do rejestracji
  eventItem.on('click', function(){

      var newDiv = $("<div class='newDiv'><form class='registerForm'><h1 class='formHeadline'>Express Your Interest!</h1><center>Fill in the form below to express you interest in this event. You will be automatically added to its standby list.</center><br><div class='inputsGroup'><label>First Name</label><input type='text'><br><label>Last Name</label><input type='text'><br><label>Email</label><input type='email'><br><input type='submit' value='Count me in' class='formSubmit'><div></form><br><br><button class='close'>X Close</button></div>");

      body.append(newDiv);
      newDiv.addClass("fullScreen");


      var button = $('button');
      button.on('click', function(){
        newDiv.removeClass("fullScreen");
        body.remove(newDiv);
        button.addClass("nonDisplay");
      });

    });

  //Funkcja sluzaca przesuwaniu miesiecy kalendarza
    var April = $('#calendarApril');
    var May = $('#calendarMay');
    var June = $('#calendarJune');
    i = 3;
    next.on('click', function(){
      i++;
      monthLabel.text(allMonths[i] + ' 2017');

      if (allMonths[i]=="May"){
        May.removeClass("nonDisplay")
      } else if (allMonths[i]=="April"){
        April.removeClass("nonDisplay");
      } else if (allMonths[i]=="June") {
        June.removeClass("nonDisplay");
      }
    });
    prev.on('click', function(){
      i--;
      monthLabel.text(allMonths[i] + ' 2017');

      if (allMonths[i]=="May"){
        May.toggleClass("display");
        April.addClass("nonDisplay");
        June.addClass("nonDisplay");
      } else if (allMonths[i]=="April"){
        April.toggleClass("display");
        June.addClass("nonDisplay");
        May.addClass("nonDisplay");
      } else if (allMonths[i]=="June") {
        June.toggleClass("display");
        May.addClass("nonDisplay");
        April.addClass("nonDisplay");
      }
    });

//Wyszukiwanie eventow w gornej sekcji kalendarza


});
