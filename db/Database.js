const connection = require("./connection");

class Database {
  constructor() {
    this.connection = connection;
  }

  createDepartments(department) {
    // return this.connection.query("INSERT INTO department SET ?", department);
  }
  // createEmployee(firstName, lastName, Role) {
  //   // console.log(firstName, lastName, Role, " in class Database");
  //   // return this.connection.query("SELECT * FROM employee");
  //   return this.connection.query("INSERT INTO employee SET ?", employee);
  // }
  createRole() {}
  ViewDepartments() {
    return this.connection.query("SELECT * FROM departments", (err, result) => {
      if (err) throw err;
      console.table(result);
    });
  }
  viewEmployees() {
    return this.connection.query(
      "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department, roles.salary, employees.manager from employees LEFT JOIN roles ON (employees.role_id = roles.id) LEFT JOIN departments ON (roles.department_id = departments.id)",
      (err, result) => {
        if (err) throw err;
        console.table(result);
      }
    );
  }
  ViewRole() {}
}

module.exports = Database;
