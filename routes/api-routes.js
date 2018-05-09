// variable declaration to hold sequelize models
let db = require("../models");

// function for API routes
module.exports = function (app) {

    // API ROUTES

    // route to send added burger request through sequelize and create new burger
    app.post("/api/burgers", function (req, res) {
        // add a burger to the burger table using the request body
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            // catch any validation errors
            res.json(err);
        });
    });

    // route to find all burgers in database through sequelize and display in a json
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            // catch any validation errors
            res.json(err);
        });
    });

    // route to update devoured state of burger through sequelize
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
                where: { // using the id from the api route
                    id: req.params.id
                }
            }).then(function (dbBurger) {
                res.json(dbBurger);
            }).catch(function (err) {
                // catch any validation errors
                res.json(err);
            });
    });

    // route to delete burger from databse through sequelize
    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: { // using the id from the api route
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            // catch any validation errors
            res.json(err);
        });
    });

};