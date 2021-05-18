// import external packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// import team roles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

// team
const team = [];

// function to obtain manager info
const manager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
        // add validate
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID number?"
        // add validate
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?"
        // add validate
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
        // add validate
      }
    ])
    .then((manager) => {
      // create manager object using responses
      const manager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);

      // add manager object to team array
      team.push(manager);
    })
}

// function to write data to file

// function to intialize data input
const init = () => {
  console.log("Please build your team");
  manager();
};

// initialize
init();