const Manager = require('../lib/Manager');
const name = "Rintaro Okabe";
const id = "001";
const email = "okarin@fglab.com";
const officeNumber = "5100";

describe("Manager class", () => {
  it("Create new Manager object", () => {
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe("Rintaro Okabe");
    expect(manager.id).toBe("001");
    expect(manager.email).toBe("okarin@fglab.com");
    expect(manager.officeNumber).toBe("5100");
  });

  describe("getOfficeNumber method", () => {
    it("Should get the office number of the Manager", () => {
      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.getOfficeNumber()).toBe("5100");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Manager", () => {
      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.getRole()).toBe("Manager");
    })
  });
});