// variable declarations for required packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

let db = require("./models");

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
require("./routes/api-routes.js")(app);

// starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});