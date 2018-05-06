// variable declarations for required files/functions
let connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM object
let orm = {

    // function to get all burgers from database
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // function to add burger into database
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES ('";
        queryString += vals;
        queryString += "') ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    // function to update status of burger in database
    changeOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    // function to delete a burger from database
    deleteOne: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

// export ORM for Burger model to use
module.exports = orm;