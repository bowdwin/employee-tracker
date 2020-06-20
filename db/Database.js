const connection = require("./connection");

class Database {
  constructor() {
    this.connection = connection;
  }

  createDepartments(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  createEmployee(employee) {
    return this.connection.query("SELECT * FROM employee");
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
  createRole(roles) {}
  findDepartments() {}
  findEmployees() {}
  findRole() {}
}

module.exports = Database;
