const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/html");
const Manager = require("./lib/manager");
const employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
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
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "Engineer's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Engineer's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Engineer's github user name:",
        name: "github",
      },
    ])
    .then((engineerResults) => {
      engineerResults.role = "Engineer";
      const { name, id, email, github, role } = engineerResults;
      const newEngineer = new Engineer(name, id, email, github, role);
      employees.push(newEngineer);
      addEmployee();
    });
};

addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "Intern's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Intern's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Intern's school:",
        name: "school",
      },
    ])
    .then((internResults) => {
      internResults.role = "Intern";
      const { name, id, email, school, role } = internResults;
      const newIntern = new Intern(name, id, email, school, role);
      employees.push(newIntern);
      addEmployee();
    });
};

addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Add another team member?",
        choices: ["Yes", "No"],
      },
    ])
    .then((choice) => {
      if (choice.add === "yes") {
        employeeType();
      } else {
        html();
      }
    });
};

init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Who is the team's Manager?",
        name: "name",
      },
      {
        type: "input",
        message: "Manager's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Manager's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Manager's office number:",
        name: "officeNumber",
      },
    ])
    .then((managerResults) => {
      managerResults.role = "Manager";
      const { name, id, email, officeNumber, role } = managerResults;
      const newManager = new Manager(name, id, email, officeNumber, role);
      employees.push(newManager);
      employeeType();
    });
};

renderHtml = () => {
  const buildHTML = render(employees);
  fs.writeFile(outputPath, buildHTML, (err) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Html file created in output folder!");
    }
  });
};

init();
