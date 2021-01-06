function getFavs() {
    var favs = [];
    $.ajax({
        url: "fav",
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data) {
            var result = data[0].favourites;
            for(var entry in result) {
                favs.push(result[entry].movie_id);
            }
        }
    });
    return favs;
}

$(function() {
    
});