var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;


var db = require("./models");


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_contoller.js");

app.use(express.static('./public'));
app.use(routes)

//syncing our sequlize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("listenning on http://localhost:" + PORT);
    });
});