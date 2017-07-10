var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var mysql = require('mysql');
var path = require('path');

var burgers_controller = require('./controllers/burgers_controller.js');

var app = express();
var PORT = (process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

burgers_controller(app);

app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
});
