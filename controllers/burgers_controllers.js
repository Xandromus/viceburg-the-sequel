// variable declarations for required packages and files/functions
const express = require("express");
let burger = require("./../models/burger.js");

// express router variable
let router = express.Router();

// HTML ROUTE

// route to send all burgers in database to the root page, rendered with handlebars
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// API ROUTES

// route to send added burger request through burger model function
router.post("/api/burgers", function (req, res) {
  // pass the new burger name and callback function in as arguments
  burger.insertOne(req.body.burger, function (result) {
    // send back the id of the new burger
    res.json({ id: result.insertId });
  });
});

// route to display all burgers in database in a json
router.get("/api/burgers", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.json(hbsObject);
  });
});

// route to update status of burger through burger model function
router.put("/api/burgers/:id", function (req, res) {

  // variable declaration for id of burger to update
  let condition = "id = " + req.params.id;

  // pass the new burger's new devoured state, id, and callback function in as arguments
  burger.changeOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// route to delete burger through burger model function
router.delete("/api/burgers/:id", function (req, res) {

  // variable declaration for id of burger to delete
  let condition = "id = " + req.params.id;

  // pass the burger's id and callback function in as arguments
  burger.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export routes for server.js to use
module.exports = router;