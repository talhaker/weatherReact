var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

const SERVER_PORT = 3001;

// mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/spacebookDB', { userClient: true }, function() {
//     console.log("DB connection established!!!");
// })

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




// Fix support Heroku & local ports
//const ACTUAL_SERVER_PORT = process.env.PORT || SERVER_PORT;
app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});