// import Intern class
const Intern = require('../lib/Intern');

// create variables to hold Intern Info
const name = "Kurisu Makise";
const id = "004";
const email = "christina@fglab.com";
const school = "Viktor Chondria University";

describe("Intern class", () => {
  it("Should create new Intern object", () => {
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe("Kurisu Makise");
    expect(intern.id).toBe("004");
    expect(intern.email).toBe("christina@fglab.com");
    expect(intern.school).toBe("Viktor Chondria University");
  });

  describe("getSchool method", () => {
    it("Should get the school name of the Intern", () => {
      const intern = new Intern(name, id, email, school);

      expect(intern.getSchool()).toBe("Viktor Chondria University");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Intern", () => {
      const intern = new Intern(name, id, email, school);

      expect(intern.getRole()).toBe("Intern");
    })
  });

  describe("createHTML method", () => {
    it("Should output HTML specific to the Intern", () => {
      const intern = new Intern(name, id, email, school);

      expect(intern.createHTML()).toContain(`
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center intern-bg name-font">
              <h4>Kurisu Makise</h4>
              <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> 004</li>
              <li class="list-group-item"><b>Email:</b> christina@fglab.com</li>
              <li class="list-group-item"><b>School:</b> Viktor Chondria University</li>
            </ul>
          </div>
        </div>
      </div>
      `
      );
    })
  })
});