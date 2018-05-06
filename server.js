// variable declarations for required packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// variable declaration for handlebars
const exphbs = require("express-handlebars");

// handlebars configuration
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// sets up the Express app to serve static files
app.use(express.static(path.join(__dirname, '/public')));

// import routes and give the server access to them
let routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});