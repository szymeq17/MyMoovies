const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "To pole jest wymagane"
    },
    password: {
        type: String,
        required: "To pole jest wymagane"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;