const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employees = [];

employees = () => {
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
