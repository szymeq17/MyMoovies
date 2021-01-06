const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    favourites: { 
        type: Array , "default" : [] 
    },
    role: {
        type: String
    }
},
 {collection: "users"});

const User = mongoose.model("User", userSchema);

module.exports = User;