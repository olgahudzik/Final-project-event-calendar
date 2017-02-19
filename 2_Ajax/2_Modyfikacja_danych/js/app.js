$(function() {

  //variables for main ul list
  var movieLists = $('.repertuar');
  //variables for url
  var movieUrl = 'http://api.coderslab.pl/movies';


  /* Insert Movies to DOM  */
  function insertContent(movies) {
    $.each(movies, function(indexMovie, movie) {
        var li = $('<li>', {class: "movie", 'data-id' : movie.id});
        var h3 = $('<h3>').text(movie.title);
        var del = $('<button>Usuń</button>', {class: "removeMovie"});
        
        li.append(h3);
        movieLists.append(li);
        li.append(del);
    });
  }

  /* Load movies and insert them into the DOM
  */
  function getMovies() {
        $.ajax({
            	url:  movieUrl
        }).done(function(response){
     		    insertContent(response);
    	 }).fail(function(error) {
           console.log(error);
       })
  }

  getMovies();

    
    $('#addMovie').on('click', function(e){
        e.preventDefault();
        var titl = $('.get_title').val();
        var desc = $('.get_description').val();
        var objektos = {
            title:titl,
            description: desc,
            screenings: [
                {"screening_date": "Foo screening 3"}
            ]
        };
        
        $.ajax({
            url: movieUrl,
            dataType: "json",
            type: "post",
            data: JSON.stringify(objektos)
        }).done(function(data){
            var li = $('<li>', {class: "movie", 'data-id' : data.id});
        var h3 = $('<h3>').text(data.title);
            var del = $('<button>Usuń</button>', {class: "removeMovie"});

        li.append(h3);
        li.append(del);
        movieLists.append(li);
        }).fail(function(error){
            console.log(error);
        });
    });
    

function removeMovie(){
    var del = $('button');

    movieLists.on('click', 'button', function(){
        var thisBtn = $(this);
        id = thisBtn.parent().data('id');

       $.ajax({
            url: 'http://api.coderslab.pl/movies/'+id,
            type: 'DELETE',
            dataType: 'json'
        }).done(function(response){
            console.log(response);
           thisBtn.parent().remove();
        }).fail(function(error){
            console.log(error);
        })
    });
}
removeMovie();





});
