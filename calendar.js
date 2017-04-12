$(function(){

  var eventItem = $('.event');
  var body = $('body');
  var prev = $('.left');
  var next = $('.right');
  var monthLabel = $('.month');
  var allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

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
    var July = $('#calendarJuly');
    var August = $('#calendarAugust');
    var September = $('#calendarSeptember');
    var October = $('#calendarOctober');
    var November = $('#calendarNovember');
    var December = $('#calendarDecember');
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
      }
    });

//Wyszukiwanie eventow w gornej sekcji kalendarza
  var submitButton = $('.searchButton');

  var inputLocation = $('#location').val();
  var inputName = $('#name').val();
  var inputDate = $('#date').val();
  var events = $('.event');
  var eventDate = $('div.event[data-date]');


  function search() {
    var inputDate = $('#date').val();
    var monthLabel = $('#month_header');
    var allMonths = [April, May, June, July, August, September, October, November, December];
    var date1 = $('[data-date="'+ inputDate + '"]');
    var dateResult = $('<section class="searchResult">'+ '[data-date="'+ inputDate + '"]' +'</section>');
    // var datesearchResult = $()


    if ($('[data-date="'+ inputDate + '"]')) {

      monthLabel.addClass("nonDisplay");
      jQuery.each( allMonths, function( i, val ) {
          allMonths[i].addClass("nonDisplay");
      });

      $('nav').append(date1);
      date1.removeClass('EU').removeClass('event').removeAttr('id'); //trzeba pousuwac jeszcze inne klasy np. US
      date1.addClass(searchResult);

    } else {
      console.log("nie wyszukalo");
    }
  }

  submitButton.on('click', function(){
    search();
  });

});
