const Intern = require('../lib/Intern');
const name = "Kurisu Makise";
const id = "004";
const email = "christina@fglab.com";
const school = "Viktor Chondria University";

describe("Intern class", () => {
  it("Create new Intern object", () => {
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
});