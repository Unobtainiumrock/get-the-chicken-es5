
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

//Start express
var app = express();

// Serve static content
app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function(){console.log('listening on' + PORT)});
