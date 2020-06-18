//require inquirer and console table
//require database class
//create prompt when app is started
//this will ask for the user what they would like to do can be any of the options in readme

// {
//     name:
//     value:
// }

//after user pickes one where handles respones and then will call as specific function
//if user select to view employees will call the getEmployees function
//down below
//it will also call the find employees function from the database class that we created

// const database = require("./db/Database.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const teamMembers = [];

// Prompt Questions to ask
const addDepartments = "Add departments, roles, employees";
const viewDepartments = "View departments, roles, employees";
const updateEmployeeRoles = "Update employee roles";

const questionSelect = () => {
  inquirer
    //prompt user to select who to add
    .prompt([
      {
        type: "list",
        message: `Welcome to the employee manager app, what would you like to do?`,
        name: "initialOption",
        choices: [addDepartments, viewDepartments, updateEmployeeRoles],
      },
    ])
    .then((choice) => {
      choiceSelected(choice);
    });
};
questionSelect();

const choiceSelected = (choice) => {
  const choiceSelected = choice.initialOption;
  console.log(choiceSelected, "choice selected");

  if (choiceSelected === addDepartments) {
    console.log(addDepartments);
    //call a function
    // selectedManager(choiceSelected);
  } else if (choiceSelected === viewDepartments) {
    // selectedIntern(choiceSelected);
    console.log(addDepartments);
  } else if (choiceSelected === updateEmployeeRoles) {
    console.log(addDepartments);
    // selectedEngineer(choiceSelected);
  } else {
    console.log(
      "there was an error in you applications, eng, intern or manager wasn't selected"
    );
  }
};
// const addTeamMember = () => {
//   inquirer
//     //prompt user to select who to add
//     .prompt([
//       {
//         type: "list",
//         message: "Select Engineer or Intern below to add more team members",
//         name: "typeOfTeamMem",
//         choices: ["Engineer", "Intern"],
//       },
//     ])
//     .then((choice) => {
//       //call function and pass choice either eng intern or manager
//       typeOfEmployee(choice);
//     });
// };
// //call addTeamMember for initial call prompt to add team member
// // addTeamMember();
// addManager();

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
