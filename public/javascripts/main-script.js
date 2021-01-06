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

function like(id) {
    return function() {
        if($(this).attr("src") === "/images/heart.png") {
            $(this).attr("src", "/images/fullheart.png");
            console.log(id);
            $.ajax({
                url: "movies/like/"+ id,
                method: "GET",
                async: false
            }).done(function(data, statusTest, xhr) {
                if(xhr.status === 200) {
                     $('body').replaceWith(data);
                }
            });
        }
        else {
            $(this).attr("src", "/images/heart.png");
            $.ajax({
                url: "movies/unlike/"+ id,
                method: "GET",
                async: false
            }).done(function(data, statusTest, xhr) {
                if(xhr.status === 200) {
                     $('body').replaceWith(data);
                }
            });
        }
    };
}

function appendMovies(movies) {
    // var title = '';
    // var img = '';
    // var year = ''
    // var id = '';
    // var rate = '';
    var numberOfFilms = Object.keys(movies).length.toString();
    var liked = [];
    $("#count-results").empty();
    $("#welcome").empty();
    $("#count-results").append("<span class='results-counter'>" + "Liczba znalezionych wyników: " + numberOfFilms + "</span>");

    $.ajax({
        url: "fav",
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data) {
            var result = data[0].favourites;
            for(var entry in result) {
                liked.push(result[entry].movie_id);
            }
        }
    });
    
    for (movie in movies) {
        var title = movies[movie].Title;
        var img = movies[movie].Poster;
        var year = movies[movie].Year;
        var id = movies[movie].imdbID;
        if(img === "N/A") {
            img = "/images/notfound.jpg";
        }
        
        $("#results").append("<div class='movie blank-movie'" + "id=" + id + "><div class='rate-circle'></div><img class='heart' src='/images/heart.png'><img class='poster' src= " + img + ">"
        + "<span class='movie-title'>" + title + "</span> <span class='movie-year'>" + year + "</span></div>");
       
        if(liked.includes(id)) {
            $("#" + id).find(".heart").attr("src", "/images/fullheart.png");
        }
        
        var movieInfo = $.ajax({
                url: 'http://www.omdbapi.com/?apikey=59aa53ec&i='+id,
                type: 'GET',
                async: false,
                success: function(data) {
                    var rate = data.imdbRating;
                    if(rate === "N/A") {
                        rate = "?";
                    }
                    $("#"+id+" .rate-circle").append(rate);
                }
        });


        
        $("#"+ movies[movie].imdbID).click(function () { 
            window.location = window.location + "movies/" + $(this).attr("id");
        }).find(".heart").click(() => {return false;});

        $("#"+ id).find(".heart").click(like(id));

        $("#"+ movies[movie].imdbID).hover(function() {$(this).find(".heart").fadeIn(500);},
                                           function() {$(this).find(".heart").fadeOut(500);});
        
        $("#"+id).removeClass("blank-movie");
    }
    
}

$(function(){

    $("#search-btn").click(function() {
        $("#results").empty();
        searchMovies($("#search-field").val());
    });
    $("#search-field").on("keypress", function(e) {
        if(e.which == 13) {
            $("#results").empty();
            searchMovies($("#search-field").val());
        }
    });
    $("#search-field").val('');

});