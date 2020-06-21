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
    console.log(addEmployees);
    addEmpFn();
  } else if (choiceSelected === addRoles) {
    console.log(addRoles);
    rolesAdd();
  } else if (choiceSelected === addDep) {
    console.log(addDep);
  } else if (choiceSelected === viewDep) {
    db.ViewDepartments();
    console.log(viewDep);
  } else if (choiceSelected === viewRoles) {
    console.log(viewRoles);
    db.viewRoles();
  } else if (choiceSelected === viewEmployees) {
    console.log(viewEmployees);
    viewEmpFn();
    console.log(viewEmployees);
  } else if (choiceSelected === updateEmpRoles) {
    console.log(updateEmpRoles);
  } else {
    console.log(
      "there was an error in you applications with initial selection"
    );
  }
  // questionSelect();
};
questionSelect();

const viewEmpFn = () => {
  db.viewEmployees().then((response) => {
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
        message: "What is their Role?",
        name: "role_id",
      },
    ])
    .then(function (employee) {
      db.createEmployee(employee).then((response) => {
        console.table(response);
      });
      questionSelect();
    });
};

// const selectedEngineer = (choiceSelected) => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: `Enter name for ${choiceSelected}`,
//         name: "name",
//       },
//       {
//         type: "input",
//         message: `Enter id for ${choiceSelected}`,
//         name: "id",
//       },
//       {
//         type: "input",
//         message: `Enter email for ${choiceSelected}`,
//         name: "email",
//       },
//       {
//         type: "input",
//         message: `Enter github username for ${choiceSelected}`,
//         name: "github",
//       },
//     ])
//     .then((engChoice) => {
//       //create a new engineer and pass all the questions answered from above to class
//       const newEngineer = new Engineer(
//         engChoice.name,
//         engChoice.id,
//         engChoice.email,
//         engChoice.github
//       );
//       teamMembers.push(newEngineer);
//       addMoreTeamMembers();
//     });
//   //do something
// };
// const selectedIntern = (choiceSelected) => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: `Enter name for ${choiceSelected}`,
//         name: "name",
//       },
//       {
//         type: "input",
//         message: `Enter id for ${choiceSelected}`,
//         name: "id",
//       },
//       {
//         type: "input",
//         message: `Enter email for ${choiceSelected}`,
//         name: "email",
//       },
//       {
//         type: "input",
//         message: `Enter the school that the ${choiceSelected} is attending`,
//         name: "school",
//       },
//     ])
//     .then((intChoice) => {
//       const newIntern = new Intern(
//         intChoice.name,
//         intChoice.id,
//         intChoice.email,
//         intChoice.school
//       );
//       teamMembers.push(newIntern);
//       addMoreTeamMembers();
//     });
// };

// const selectedManager = (choiceSelected) => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: `Enter name for ${choiceSelected}`,
//         name: "name",
//       },
//       {
//         type: "input",
//         message: `Enter id for ${choiceSelected}`,
//         name: "id",
//       },
//       {
//         type: "input",
//         message: `Enter email for ${choiceSelected}`,
//         name: "email",
//       },
//       {
//         type: "input",
//         message: `Enter office number for ${choiceSelected}`,
//         name: "officeNumber",
//       },
//     ])
//     .then((manChoice) => {
//       const newManager = new Manager(
//         manChoice.name,
//         manChoice.id,
//         manChoice.email,
//         manChoice.officeNumber
//       );
//       teamMembers.push(newManager);
//       addMoreTeamMembers();
//     });
//   //do something
// };

// const addMoreTeamMembers = () => {
//   inquirer
//     //prompt user to select who to add
//     .prompt([
//       {
//         type: "list",
//         message: "Would you like to add another team member?",
//         name: "addAnotherTeam",
//         choices: ["Yes", "No"],
//       },
//     ])
//     .then((choice) => {
//       if (choice.addAnotherTeam === "No") {
//         //call render html if they added a manager
//         if (managerWasAdded === true) {
//           renderHTML();
//           //else ask them to add a manager
//         } else {
//           console.log("Please add a Manager");
//         }
//       } else {
//         addTeamMember();
//       }
//     });
// };

// const renderHTML = () => {
//   let html = render(teamMembers);
//   fs.writeFile(outputPath, html, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Successfully created team.html in output folder");
//   });
// };
