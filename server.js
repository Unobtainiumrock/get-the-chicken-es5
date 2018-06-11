
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

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require('./controllers/chickens-controller');

app.use(routes);

app.listen(PORT, function(){console.log('listening on port: ' + PORT)});
