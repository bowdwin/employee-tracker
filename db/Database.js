const connection = require("./connection");

class Database {
  constructor() {
    this.connection = connection;
  }

  createDepartments(department) {
    return this.connection.query("INSERT INTO departments SET ?", department);
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
      "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department, roles.salary, employees.manager_id from employees LEFT JOIN roles ON (employees.role_id = roles.id) LEFT JOIN departments ON (roles.department_id = departments.id)"
    );
  }
  viewRoles() {
    return this.connection.query("SELECT title FROM roles");
  }

  updateRoles(res) {
    return this.connection.query(
      `UPDATE employees SET role_id = ${res.role} WHERE id = ${res.employeeName}`
    );
  }
}

module.exports = Database;
