$(function(){

  var eventItem = $('.event');
  var body = $('body');
  var prev = $('.left');
  var next = $('.right');
  var monthLabel = $('.month');
  var allMonths = ["January", "February", "March"];

console.log(prev,next,monthLabel, allMonths);

  // eventItem.on('click', function(){
  //
  //     var newDiv = $("<div class='newDiv'>");
  //
  //     newDiv.html('<form><label>First Name</label><input type="text"><label>Last Name</label><input type="text"><label>Email</label><input type="email"></form>');
  //     newDiv.html('<button class="close">Close</button>');
  //     body.append(newDiv);
  //     newDiv.addClass("fullScreen");
  //     console.log(newDiv);
  //
  //
  //
  //     var button = $('button');
  //     button.on('click', function(){
  //       newDiv.removeClass("fullScreen");
  //       body.remove(newDiv);
  //     });
  //
  //   });

  next.on('click', function(){
    $(allMonths).each(function(){

      console.log($(this));
    });
  });

});
