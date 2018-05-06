// variable declarations for required packages
require("dotenv").config();
const mysql = require("mysql");

// variable declaration for MySQL connection
let connection;

// if a JAWSDB database exists, connect to it
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { // otherwise use the local database
    connection = mysql.createConnection({
        host: "localhost",

        // username
        user: "root",

        // password
        password: process.env.MYSQLPASSWORD,
        database: "burgers_db"
    });
};

// Make connection.
connection.connect();

// export connection for ORM to use
module.exports = connection;