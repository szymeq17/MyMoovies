var express = require('express');
var router = express.Router();
const User = require('../models/user.model');
var session = require('express-session');

// router.get('/', function(req, res, next) {
//   res.render('login');
// });

// router.post('/', function(req, res, next) {
//   var username = req.body.username;
//   var password = req.body.password;
//   User.findOne({username: username, password: password}).exec((err, user) => {
//     if(user) {
//       req.session.loggedin = true;
//       req.session.username = username;
//       res.redirect("/");
//     }
//     else {
//       res.send("Niepoprawne dane logowania");
//     }
//   });
// });

module.exports = router;
