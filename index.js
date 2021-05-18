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
    .then((response) => {
      // create manager object using responses
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

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
      // obtain info specific to the selected role
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
              name: 'github',
              message: "What is the gngineer's GitHub username?"
            }
          ])
          .then((response) => {
            // create engineer object using responses
            const engineer = new Engineer(response.name, response.id, response.email, response.github);

            // add engineer object to team array
            team.push(engineer);
         })
      } else if (response.addEmployee === 'Intern') {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: "What is the intern's name?"
              // add validate
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the intern's ID number?"
              // add validate
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the intern's email address?"
              // add validate
            },
            {
              type: 'input',
              name: 'school',
              message: "What is the intern's school name?"
            }
          ])
          .then((response) => {
            // create intern object using responses
            const intern = new Engineer(response.name, response.id, response.email, response.github);

            // add intern object to team array
            team.push(intern);
        })
      } else {

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