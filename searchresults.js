$(function(){
  //Wyszukiwanie eventow w gornej sekcji kalendarza
    var submitButton = $('.searchButton');
    var events = $('.event');
    var monthLabel = $('#month_header');
    var allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

    function search() {
      var inputDate = $('#date').val();
      var inputLocation = $('#location').val();
      var inputName = $('#name').val();
      var monthLabel = $('#month_header');
      var allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
      if(inputDate !== '' &&  inputName !== '' && inputLocation !== ''){
        return false;
      }
      var allFilters = $('.event')
      .filter(function(index) {
        return inputDate==='' || $(this).data('date')===inputDate;
      })
      .filter(function(index) {
        return inputLocation==='' || ($(this).data('country').toLowerCase().indexOf(inputLocation.toLowerCase()) >= 0 || $(this).data('city').toLowerCase().indexOf(inputLocation.toLowerCase()) >= 0);
      })
      .filter(function(index) {
        return inputName==='' || $(this).data('name').toLowerCase().indexOf(inputName.toLowerCase()) >= 0;
      });

  //zwracanie wyfiltrowanych danych w formie tabeli

      $('#searchTable tr:not(:first)').remove();
      if (allFilters.length) {
        allFilters.each(function(index) {
          console.log($(this));
          var dataDateValue = $(this).data('date');
          var dataCountryValue = $(this).data('country');
          var dataCityValue = $(this).data('city');
          var dataNameValue = $(this).data('name');
          var dataURLValue = $(this).data('url');
          $('#searchTable').append('<tr><td data-url="' + dataURLValue +'">'+dataNameValue+'</td><td>'+dataDateValue+'</td><td>'+dataCountryValue+', '+dataCityValue+'</td><td><button class="resultsButton">Register Now</button></td></tr>');
        });
    } else {
          $('#searchTable').append('<tr><td colspan="4" class="red">No results</td></tr>');
    }
  }


// Funkcja wyświetlająca formularz na klik w guzik w wynikach wyszukiwania
function openFormFromSearchResults(eventName, eventLink) {

  var newDiv = $("<div class='newDiv'><form class='registerForm'><h1 class='green'>Express Your Interest!</h1><br><br><center>Fill in the form below to express you interest in the <b>" + eventName +"</b>. You will be automatically added to its standby list.</center><div class='inputsGroup'><label>First Name</label><input type='text' id='firstName'><br><label>Last Name</label><input type='text' id='lastName'><br><label>Email</label><input type='email' id='formEmail'><br><input type='submit' value='Count me in' class='formSubmit'><div></form><br><br><center><a href='" + eventLink +"' target='_blank' class='green'><b>Click Here</b></a> to be redirected<br> to the event website.</center><br><br><button class='close'>X Close</button></div>");

  $('body').append(newDiv);
  newDiv.addClass("fullScreen");


  var button = $('button');
  button.on('click', function(){
    newDiv.removeClass("fullScreen");
    $('body').remove(newDiv);
    button.addClass("nonDisplay");
    monthLabel.addClass("nonDisplay");
    var calendarBoard = $('.calendar');
    jQuery.each(calendarBoard, function (i,val) {
      $(this).addClass("nonDisplay");
    });
    searchSection.removeClass("nonDisplay");
  });
}


submitButton.on('click', function(){

      monthLabel.addClass("nonDisplay");
      var calendarBoard = $('.calendar');
      jQuery.each(calendarBoard, function (i,val) {
        $(this).addClass("nonDisplay");
      });

      var searchSection = $('#searchSection');
      $('nav').after(searchSection);
      searchSection.removeClass("nonDisplay");

      search();
//uruchomienie powyzszej funkcji wyświetlajacej formularz na klik w guzik w wynikach wyszukiwania
      var resultsButton = $('.resultsButton');
      resultsButton.on('click', function(){

        var firstColumn = $(this).parent().parent().find('td:first-child');
        var eventName = firstColumn.text();
        var eventLink = firstColumn.data('url');

        openFormFromSearchResults(eventName, eventLink);
      });
    });




});
