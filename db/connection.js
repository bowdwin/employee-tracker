require("dotenv").config();
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connection made to database.");
});

// promisify(original) assumes that original is a function taking a callback
// as its final argument in all cases, and the returned function will result
// in undefined behaviour if it does not. So basically it's a utility function
// that takes a regular function and converts it to a function that returns a promise/s
connection.query = util.promisify(connection.query);
//exports connection module
module.exports = connection;
