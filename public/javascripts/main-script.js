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
    var id = '';
    var rate = '';
    var numberOfFilms = Object.keys(movies).length.toString();
    $("#count-results").empty();
    $("#count-results").append("<span class='results-counter'>" + "Liczba znalezionych wyników: " + numberOfFilms + "</span>");
    
    for (movie in movies) {
        title = movies[movie].Title;
        img = movies[movie].Poster;
        year = movies[movie].Year;
        id = movies[movie].imdbID;
        if(img === "N/A") {
            img = "/images/notfound.jpg";
        }
        
        $("#results").append("<div class='movie blank-movie'" + "id=" + id + "><div class='rate-circle'></div><img class='heart' src='/images/heart.png'><img class='poster' src= " + img + ">"
        + "<span class='movie-title'>" + title + "</span> <span class='movie-year'>" + year + "</span></div>");
       
        
        var movieInfo = $.ajax({
                url: 'http://www.omdbapi.com/?apikey=59aa53ec&i='+id,
                type: 'GET',
                async: false,
                success: function(data) {
                    rate = data.imdbRating;
                    if(rate === "N/A") {
                        rate = "?";
                    }
                    $("#"+id+" .rate-circle").append(rate);
                }
        });


        
        $("#"+ movies[movie].imdbID).click(function () { 
            window.location = window.location + "movies/" + $(this).attr("id");
        }).find(".heart").click(() => {return false;});

        $("#"+ movies[movie].imdbID).find(".heart").click(function() {
            if($(this).attr("src") === "/images/heart.png") {
                $(this).attr("src", "/images/fullheart.png");
            }
            else {
                $(this).attr("src", "/images/heart.png");
            }
        });

        $("#"+ movies[movie].imdbID).hover(function() {$(this).find(".heart").fadeIn(500);},
                                           function() {$(this).find(".heart").fadeOut(500);});
        
        $("#"+id).removeClass("blank-movie");
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