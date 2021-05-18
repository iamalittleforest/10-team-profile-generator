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

// function to obtain employee info
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'addEmployee',
        message: "What type of employee would you like to add?",
        choices: ['Engineer', 'Intern', 'None']
      }
    ])
    .then((response) => {
      if(response.addEmployee === 'Engineer') {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: "What is the engineer's name?"
              // add validate
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the engineer's ID number?"
              // add validate
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the engineer's email address?"
              // add validate
            },
            {
              type: 'input',
              name: 'officeNumber',
              message: "What is the engineer's office number?"
              // add validate
            },
            {
              type: 'input',
              name: 'github',
              message: "What is the gngineer's GitHub username?"
            }
          ])
          .then((engineer) => {
            // create engineer object using responses
            const engineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);

            // add manager object to team array
            team.push(engineer);
         })
      }
    })
}

// function to write data to file

// function to intialize data input
const init = () => {
  console.log("Please build your team");
  manager();
  addEmployee();
};

// initialize
init();