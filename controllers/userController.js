// const express = require("express");
// var router = express.Router();
// const mongoose = require('mongoose');
// const User = mongoose.model("User");

// router.get('/users', (req, res) => {
//     res.send("spoko");
// });

// router.post('/users', (req, res) => {
//     if(req.body._id = '') {
//         insertRecord(req, res);
//     }
//     else {
//         updateRecord(req, res);
//     }
// });

// function insertRecord(req, res) {
//     var user = new User();
//     user.username = req.body.username;
//     user.email = req.body.email;
//     user.password = req.body.password;
//     user.save((err, doc) => {
//         if(!err) {
//             res.redirect('index');
//         }
//     });
// }

// function updateRecord(req, rest) {
//     User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
//         if(!err) {
//             res.redirect('index');
//         }
//     });
// }

// router.get('/list', (req, res) => {
//     User.find((err, doc) => {
//         if(!err) {
//             res.send(docs);
//         }
//     })
// })