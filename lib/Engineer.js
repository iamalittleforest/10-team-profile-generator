const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  createHTML(){
    return `
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header bg-secondary text-white text-center">
              <h4>${this.name}</h4>
              <h4><i class="fas fa-laptop-code"></i> Engineer</h4>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> ${this.id}</li>
              <li class="list-group-item"><b>Email:</b> ${this.email}</li>
              <li class="list-group-item"><b>GitHub:</b> ${this.github}</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }
}

module.exports = Engineer;