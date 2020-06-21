const inquirer = require("inquirer");
const Database = require("./db/Database");
const db = new Database();
const cTable = require("console.table");

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
    //prompt user to select who to add
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
    .then(function (choice) {
      choiceSelected(choice);
    });
};

const choiceSelected = (choice) => {
  const choiceSelected = choice.initialOption;
  console.log(choiceSelected, "choice selected");

  if (choiceSelected === addEmployees) {
    // console.log(addDepartments);
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
    console.log(
      "there was an error in you applications with initial selection"
    );
  }
  // questionSelect();
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
  // db.viewRoles();
  inquirer
    //prompt user to select who to add
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
        message: "Who is their Manager?",
        name: "manager",
      },
      {
        type: "input",
        message: "What is their Role ID?",
        name: "role_id",
      },
    ])
    .then((employee) => {
      db.createEmployee(employee).then((response) => {
        console.table(response);
      });
      questionSelect();
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
      console.log(department);
      db.createDepartments(department).then((response) => {
        console.table(response);
      });
      questionSelect();
    });
};

const addRolesFn = () => {
  // db.viewRoles();
  inquirer
    //prompt user to select who to add
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
      db.createRole(role).then((response) => {
        console.table(response);
      });
      questionSelect();
    });
};

const updateRoleFn = () => {
  // db.viewRoles();
  inquirer
    //prompt user to select who to add
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
      db.updateRoles(role).then((response) => {
        console.table(response);
      });
      questionSelect();
    });
};

questionSelect();
