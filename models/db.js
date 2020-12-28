const mongoose = require('mongoose');
const User = require('./user.model');

mongoose.connect('mongodb://localhost:27017/mymoovies', {
    useNewUrlParser: true
},
err => {
    if(!err) {
        console.log("Connection succeded");
    }
    else {
        console.log("Error in connection");
    }
});

// const testowy = new User({
//     username: "jan",
//     password: "nomysz"
// });

// testowy.save();

// User.find().exec((err, user) => {
//     console.log(user);
// })
