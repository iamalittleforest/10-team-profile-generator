const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (github) {
    this.github = github;
  }

  getGithub() {

  }

  getRole() {
    return this.Engineer;
  }
}

module.exports = Engineer;