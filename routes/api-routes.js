let db = require("../models");

module.exports = function (app) {

    // API ROUTES

    // route to send added burger request through burger model function
    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (dbBurger) {

            // We have access to the new todo as an argument inside of the callback function
            res.json(dbBurger);
        })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    // route to display all burgers in database in a json
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // route to update status of burger through burger model function
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurger) {
                res.json(dbBurger);
            })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    // route to delete burger through burger model function
    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

};