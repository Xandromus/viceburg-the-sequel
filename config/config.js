// const fs = require("fs");
require('dotenv').config();
module.exports = {
    development: {
      username: "root",
      password: process.env.MYSQLPASSWORD,
      database: "burgers_db",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
      username: process.env.JAWSDB_URL,
      password: process.env.JAWSDB_URL,
      database: process.env.JAWSDB_URL,
      host: "127.0.0.1",
      dialect: "mysql"
    }
  };