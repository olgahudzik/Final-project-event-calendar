$(function(){
  //Wyszukiwanie eventow w gornej sekcji kalendarza
    var submitButton = $('.searchButton');
    var inputLocation = $('#location').val();
    var inputName = $('#name').val();
    var inputDate = $('#date').val();
    var events = $('.event');
    var eventDate = $('div.event[data-date]');
    var monthLabel = $('#month_header');
    var allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

    function search() {
      var inputDate = $('#date').val();
      var inputLocation = $('#location').val();
      var inputName = $('#name').val();
      var monthLabel = $('#month_header');
      var allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
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
      if (allFilters) {
        allFilters.each(function(index) {
          var dataDateValue = $(this).data('date');
          var dataCountryValue = $(this).data('country');
          var dataCityValue = $(this).data('city');
          var dataNameValue = $(this).data('name');
          $('#searchTable').append('<tr><td>'+dataNameValue+'</td><td>'+dataDateValue+'</td><td>'+dataCountryValue+', '+dataCityValue+'</td><td><button class="resultsButton">Register Now</button></td></tr>');
        });
    } else {
      console.log('No results');
        // $('#searchTable').append('<tr><td colspan="4">No results</td></tr>');
    }
  }


// Funkcja wyświetlająca formularz na klik w guzik w wynikach wyszukiwania
function openFormFromSearchResults() {
  var newDiv = $("<div class='newDiv'><form class='registerForm'><h1 class='formHeadline'>Express Your Interest!</h1><center>Fill in the form below to express you interest in this event. You will be automatically added to its standby list.</center><br><div class='inputsGroup'><label>First Name</label><input type='text'><br><label>Last Name</label><input type='text'><br><label>Email</label><input type='email'><br><input type='submit' value='Count me in' class='formSubmit'><div></form><br><br><button class='close'>X Close</button></div>");

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
        openFormFromSearchResults();
      });
    });



});
