const Engineer = require('../lib/Engineer');
const name = "Itaru Hashida";
const id = "003";
const email = "daru@fglab.com";
const github = "daru";

describe("Engineer class", () => {
  it("Create new Engineer object", () => {
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toBe("Itaru Hashida");
    expect(engineer.id).toBe("003");
    expect(engineer.email).toBe("daru@fglab.com");
    expect(engineer.github).toBe("daru");
  });

  describe('getGithub method', () => {
    it('Should get the GitHub username of the Engineer', () => {
      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getGithub()).toBe("daru");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Engineer", () => {
      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getRole()).toBe("Engineer");
    })
  });
});