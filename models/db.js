const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB', {
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

require('./;user.model')