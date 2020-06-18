//database class

const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }
  createDepartment() {
    return this.connection.query();
    SELECT
  }
  createEmployee() {
    return this.connection.query();
    SELECT
  }
  createRole() {
    return this.connection.query();
    SELECT
  }
}
findDepartment() {
    return this.connection.query();
  }


  modules.exports = new Database(connection);
//instead of great do GET or FID despartments almost same as above, about 7 functions