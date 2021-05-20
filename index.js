// import external packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// import team roles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

// read main.html
const mainHTML = fs.readFileSync("./src/main.html", "utf8")

// array to store all employees
const team = [];

// function to obtain manager info
const managerPrompt = () => {
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
      },
      {
        type: 'list',
        name: 'addEmployee',
        message: "What type of employee would you like to add?",
        choices: ['Engineer', 'Intern', 'None']
      }
    ])
    .then((mResponse) => {
      // create manager object using responses
      const manager = new Manager(mResponse.name, mResponse.id, mResponse.email, mResponse.officeNumber);

      // add manager object to team array
      team.push(manager);
      
      // obtain info specific to the selected role
      if(mResponse.addEmployee === 'Engineer') {
        engineerPrompt();
      } else if (mResponse.addEmployee === 'Intern') {
        internPrompt();
      } else {
        generateHTML();
      }
    })
}
  
// function to obtain engineer info
const engineerPrompt = () => {
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
        message: "What is the engineer's GitHub username?"
        // add validate
      },
      {
        type: 'list',
        name: 'addEmployee',
        message: "What type of employee would you like to add?",
        choices: ['Engineer', 'Intern', 'None']
      }
    ])
    .then((eResponse) => {
      // create engineer object using responses
      const engineer = new Engineer(eResponse.name, eResponse.id, eResponse.email, eResponse.github);
      
      // add engineer object to team array
      team.push(engineer);

      // obtain info specific to the selected role
      if(eResponse.addEmployee === 'Engineer') {
        engineerPrompt();
      } else if (eResponse.addEmployee === 'Intern') {
        internPrompt();
      } else {
        generateHTML();
      }
    })
}     
  
// function to obtain intern info
const internPrompt = () => {
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
          // add validate
        },
        {
          type: 'list',
          name: 'addEmployee',
          message: "What type of employee would you like to add?",
          choices: ['Engineer', 'Intern', 'None']
        }
      ])
    .then((iResponse) => {
      // create intern object using responses
      const intern = new Intern(iResponse.name, iResponse.id, iResponse.email, iResponse.school);
      
      // add intern object to team array
      team.push(intern);

      // obtain info specific to the selected role
      if(iResponse.addEmployee === 'Engineer') {
        engineerPrompt();
      } else if (iResponse.addEmployee === 'Intern') {
        internPrompt();
      } else {
        generateHTML();
      }
    })
  }
  
// function to intialize data input
const init = () => {
  console.log("Please build your team");
  managerPrompt();
};

// function to render HTML from team 
const renderHTML = (team) => {
return team.map(a => a.createHTML()).join('\n');
}
  
// function to generate HTML file
const generateHTML = () => {
  
  // write HTML file
  fs.writeFile('./dist/team.html', mainHTML.replace("{{body}}", renderHTML(team)), (err) => {
    err ? console.log(err) : console.log('Successfully created team.html!');
  }); 
}

// initialize
init();  