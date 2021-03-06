const inquirer = require("inquirer");
const Database = require("./db/Database");
const db = new Database();
const cTable = require("console.table");
const sql = require("./db/connection");

// Prompt Questions to ask
const addEmployees = "ADD Employees";
const addDep = "ADD Departments";
const addRoles = "ADD Roles";
const viewDep = "VIEW Departments";
const viewRoles = "VIEW Roles";
const viewEmployees = "VIEW Employees";
const updateEmpRoles = "Update employee roles";

const questionSelect = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: `Welcome to the employee manager app, what would you like to do?`,
        name: "initialOption",
        choices: [
          addEmployees,
          addDep,
          addRoles,
          viewDep,
          viewRoles,
          viewEmployees,
          updateEmpRoles,
        ],
      },
    ])
    .then((choice) => {
      choiceSelected(choice);
    });
};

const choiceSelected = (choice) => {
  const choiceSelected = choice.initialOption;

  if (choiceSelected === addEmployees) {
    addEmpFn();
  } else if (choiceSelected === addRoles) {
    addRolesFn();
  } else if (choiceSelected === addDep) {
    addDepFn();
  } else if (choiceSelected === viewDep) {
    viewDepFn();
  } else if (choiceSelected === viewRoles) {
    viewRoleFn();
  } else if (choiceSelected === viewEmployees) {
    viewEmpFn();
  } else if (choiceSelected === updateEmpRoles) {
    updateRoleFn();
  } else {
    sql.end();
  }
  // TODO: add quit
};

const viewEmpFn = () => {
  db.viewEmployees().then((response) => {
    console.table(response);
  });
  questionSelect();
};

const viewDepFn = () => {
  db.ViewDepartments().then((response) => {
    console.table(response);
  });
  questionSelect();
};

const viewRoleFn = () => {
  db.viewRoles().then((response) => {
    console.table(response);
  });
  questionSelect();
};

const addEmpFn = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter first name of Employee",
        name: "first_name",
      },
      {
        type: "input",
        message: "Enter last name of Employee",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is the manager id",
        name: "manager_id",
      },
      {
        type: "input",
        message: "What is their Role ID?",
        name: "role_id",
        choices: [1, 2, 3],
      },
    ])
    .then((employee) => {
      db.createEmployee(employee).then((response) => {
        // console.table(response);
      });
      viewEmpFn();
    });
};

const addDepFn = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter new Department Name",
        name: "department",
      },
    ])
    .then((department) => {
      db.createDepartments(department).then((response) => {});
      viewDepFn();
    });
};

const addRolesFn = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the new title of this Role",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the department ID",
        name: "department_id",
      },
    ])
    .then((role) => {
      db.createRole(role).then((response) => {});
      viewRoleFn();
    });
};

const updateRoleFn = () => {
  sql.query("SELECT first_name, last_name, id FROM employees", (err, res) => {
    let employees = res.map((employee) => ({
      name: employee.first_name + " " + employee.last_name,
      value: employee.id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeName",
          message: "Which employee's role would you like to update?",
          choices: employees,
        },
        {
          type: "input",
          name: "role",
          message: "What is your new role ID?",
        },
      ])
      .then((res) => {
        console.log(res, "res in .then");
        db.updateRoles(res).then((response) => {
          console.table(response);
        });
        // sql.query(
        //   `UPDATE employees SET role_id = ${res.role} WHERE id = ${res.employeeName}`,
        //   (err, res) => {
        //     console.log(res);
        //   }
        // );
        viewEmpFn();
        questionSelect();
      });
  });
};

questionSelect();
