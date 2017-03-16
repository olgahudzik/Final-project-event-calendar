$(function(){

  var eventItem = $('.event');
  var body = $('body');
  var prev = $('.left');
  var next = $('.right');
  var monthLabel = $('.month');
  var allMonths = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"];

console.log(prev,next,monthLabel, allMonths);

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

  next.on('click', function(){
    jQuery.each( allMonths, function( i, val ) {
        i++;
        monthLabel.text(val + ' 2017');
	     });
  });
  prev.on('click', function(){
    jQuery.each( allMonths, function( i, val ) {
        i--;
        monthLabel.text(val + ' 2017');
	     });
  });
});
