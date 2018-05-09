// variable declaration to hold sequelize models
let db = require("../models");

// function to render main page through handlebars
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            let hbsObject = {
                burgers: dbBurger
            };
            res.render("index", hbsObject);
        });
    });
};