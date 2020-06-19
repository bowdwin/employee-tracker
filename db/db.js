//database class

const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  createEmployee() {
    return this.connection.query();
    SELECT;
  }
  createDepartment() {
    return this.connection.query();
    SELECT;
  }

  createRole() {
    return this.connection.query();
    SELECT;
  }
}
// findDepartment() {
//     return this.connection.query();
//   }

modules.exports = new Database(connection);
//instead of great do GET or FID despartments almost same as above, about 7 functions
