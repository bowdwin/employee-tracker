const connection = require("./connection");

class Database {
  constructor() {
    this.connection = connection;
  }

  createDepartments(department) {
    return this.connection.query("INSERT INTO departments SET ?", department);
    // return this.connection.query("INSERT INTO department SET ?", department);
  }
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employees SET ?", employee);
  }
  createRole(role) {
    return this.connection.query("INSERT INTO roles SET ?", role);
  }
  ViewDepartments() {
    return this.connection.query("SELECT * FROM departments");
  }

  viewEmployees() {
    return this.connection.query(
      "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department, roles.salary, employees.manager from employees LEFT JOIN roles ON (employees.role_id = roles.id) LEFT JOIN departments ON (roles.department_id = departments.id)"
    );
  }
  viewRoles() {
    return this.connection.query("SELECT title FROM roles");
  }

  updateRoles() {
    return this.connection.query("SELECT title FROM roles");
  }
}

module.exports = Database;
