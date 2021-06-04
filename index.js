const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/html");
const manager = require("./lib/manager");
const employee = require("./lib/employee");
const intern = require("./lib/intern");
const engineer = require("./lib/engineer");
const employees = [];

employeeType = () => {
  console.log("What is the employee's role?");
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is the Employee's role?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((choice) => {
      if (choice.role === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
};

addEngineer = () => {
    return inquirer.prompt([
        //question about Engineer
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        //ask if user wants to add another team member
        addEmployee();
    });
};
