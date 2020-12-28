var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  request('http://www.omdbapi.com/?apikey=59aa53ec&i='+id, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    res.render('movie', {
      title: body.Title,
      year: body.Year,
      runtime: body.Runtime,
      genre: body.Genre,
      rating: body.imdbRating,
      poster: function() {
        if(body.Poster === "N/A") {
          return "/images/notfound.jpg";
        }
        else {
          return body.Poster;
        }
      },
      plot: body.Plot,
      premiere: body.Released,
      movieid: id,
      stars: body.Actors,
      director: body.Director,
      writer: body.Writer
    });
  }
  });
});

module.exports = router;
