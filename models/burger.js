// variable declarations for required files/functions
let orm = require("./../config/orm.js");

// burger model object
let burger = {

  selectAll: function (cb) { // function to select all items through the ORM
    orm.selectAll("burgers", function (res) {
      // pass the table name and callback function in as arguments
      cb(res);
    });
  },
  insertOne: function (vals, cb) { // function to add a new burger through the ORM
    orm.insertOne("burgers", "burger_name", vals, function (res) {
      // pass the table name, column name, new burger name, and callback function in as arguments 
      cb(res);
    });
  },
  changeOne: function (objColVals, condition, cb) { // function to update a burger through the ORM
    orm.changeOne("burgers", objColVals, condition, function (res) {
      // pass the table name, the burger's new devoured state, the id of the burger, and callback function in as arguments
      cb(res);
    });
  },
  deleteOne: function (condition, cb) { // function to delete a burger through the ORM
    orm.deleteOne("burgers", condition, function (res) {
      // pass the table name, the id of the burger, and callback function in as arguments
      cb(res);
    });
  }
};

// export burger model for controller to use
module.exports = burger;