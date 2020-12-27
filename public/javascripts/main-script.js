$("#main-nav").addClass("active");
$("#best-nav").removeClass("active");

function searchMovies(phrase) {
    var url = "http://www.omdbapi.com/?apikey=59aa53ec";
    url = url.concat("&s=", phrase);
    $.ajax({
        url: url,
        type: 'get',
        dataType: "json",
        success: function( data ) {
            if(data.Response === 'False') {
                $("#count-results").empty();
                $("#count-results").append("<span class='results-counter'>Ups! Nie znaleziono żadnych wyników.</span>");
            }
            else {
                appendMovies(data.Search);
                for (movie in data.Search) {
                }
            }
        }
       });
}

function appendMovies(movies) {
    var title = '';
    var img = '';
    var year = ''
    var numberOfFilms = Object.keys(movies).length.toString();
    $("#count-results").empty();
    $("#count-results").append("<span class='results-counter'>" + "Liczba znalezionych wyników: " + numberOfFilms + "</span>");
    for (movie in movies) {
        title = movies[movie].Title;
        img = movies[movie].Poster;
        year = movies[movie].Year;
        $("#results").append("<div class='movie'" + "id=" + movies[movie].imdbID + "> <img class='poster' src= " + img + ">"
                             + "<span class='movie-title'>" + title + "</span> <span class='movie-year'>" + year + "</span></div>");
        $("#"+ movies[movie].imdbID).click(function () { 
            window.location = window.location + "movies/" + $(this).attr("id");
            console.log("aaa"); 
        });
    }
}

$(function(){
    $("#search-btn").click(function() {
        $("#results").empty();
        searchMovies($("#search-field").val());
    })
    $("#search-field").on("keypress", function(e) {
        if(e.which == 13) {
            $("#results").empty();
            searchMovies($("#search-field").val());
        }
    })
    $("#search-field").val('');

})