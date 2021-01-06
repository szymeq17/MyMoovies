var express = require('express');
var router = express.Router();
const User = require('../models/user.model');
var session = require('express-session');

/* get home page */
router.get('/', function(req, res, next) {
  var logged = false;
  if (req.session.loggedin) {
    console.log("Zalogowany: " + req.session.username);
    logged = true;
  }
  else {
    console.log("Użytkownik niezalogowany");
  }
  res.render('index', {logged: logged, username: req.session.username});
});

/* get login page */

router.get('/login', function(req, res, next) {
  res.render('login');
});

/* login */

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({username: username, password: password}).exec((err, user) => {
    if(user) {
      req.session.loggedin = true;
      req.session.username = username;
      res.redirect("/");
    }
    else {
      res.send("Niepoprawne dane logowania");
    }
  });
  /*
  User.findOne({username: username}).update({
    $push : {
       favourites :  {
                "movie_id": "321123",
              } //inserted data is the object to be inserted 
     }
   }).exec()
   */
});

/* logout */

router.get('/logout', function(req, res, next) {
  req.session.loggedin = false;
  res.redirect("/");
})

/* get registration page */

router.get('/register', function(req, res, next) {
  res.render("register");
});

/* register */

router.post('/register', function(req, res, next) {
  var username = req.body.username;
  var password1 = req.body.password1;
  var password2 = req.body.password2;

  var errorMsg = "";
  var usernameErr = "";
  var passwordErr = "";

  if(!username || !password2 || !password2) {
    errorMsg = "Żadne pole nie może być puste!";
  }

  if(password1.length < 6) {
    passwordErr = "Hasło musi zawierać co najmniej 6 znaków!"
  }

  
  if(username.length < 6) {
    usernameErr = "Nazwa użytkownika musi zawierać co najmniej 6 znaków!"
  }

  if(password1 !== password2) {
    errorMsg = "Hasła muszą być takie same!"
  }

  if(errorMsg || passwordErr || usernameErr) {
    res.render("register", {
      errorMsg: errorMsg,
      usernameErr: usernameErr,
      passwordErr: passwordErr
    });
    return false;
  }

  User.findOne({username: username}).exec((err, user) => {
    if(user) {
      usernameErr = "Ta nazwa użytkownika jest zajęta!";
    }
    else {
      const newUser = new User({
        username: username,
        password: password1
      });
      
      newUser.save()
                    .then((value)=>{
                        console.log(value)
                    res.redirect('/login');
                    res.end();
                    });
    }
  });
  
  


});

module.exports = router;
