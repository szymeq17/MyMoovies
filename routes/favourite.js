var express = require('express');
var router = express.Router();
const User = require('../models/user.model');
var session = require('express-session');

router.get('/', function(req, res, next) {
  if(req.session.loggedin) {
    res.render("favourite");
  }
  else {
    res.redirect("/login");
  }
});

module.exports = router;
