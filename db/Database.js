//database class

const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }
  createDepartment() {
    return this.connection.query();
  }
  createEmployee() {
    return this.connection.query();
  }
  createRole() {
    return this.connection.query();
  }
}
getDepartment() {
    return this.connection.query();
  }


  modules.exports = new Database(connection);
//instead of great do GET or FID despartments almost same as above, about 7 functions