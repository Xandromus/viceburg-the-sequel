let db = require("../models");

module.exports = function(app) {
    
app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        let hbsObject = {
            burgers: dbBurger
          };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// API ROUTES

// route to send added burger request through burger model function
app.post("/api/burgers", function (req, res) {
    console.log(req.body.burger_name);
    db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function(dbBurger) {
          console.log(dbBurger);
          
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbBurger);
      })
        .catch(function(err) {
            console.log(err);
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
          res.json(err);
        });
});

// route to display all burgers in database in a json
app.get("/api/burgers", function (req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

// route to update status of burger through burger model function
app.put("/api/burgers/:id", function (req, res) {


});

// route to delete burger through burger model function
app.delete("/api/burgers/:id", function (req, res) {

});

};