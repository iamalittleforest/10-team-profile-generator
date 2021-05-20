const Employee = require('../lib/Employee');
const name = "Mayuri Shiina";
const id = "002";
const email = "mayushii@fglab.com";

describe("Employee class", () => {
  it("Create new Employee object", () => { 
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe("002");
    expect(employee.email).toBe("mayushii@fglab.com");
  });

  describe("getName method", () => {
    it("Should get the name of the Employee", () => {
      const employee = new Employee(name, id, email);

      expect(employee.getName()).toBe("Mayuri Shiina");
    })
  });

  describe("getId method", () => {
    it("Should get the ID number of the Employee", () => {
      const employee = new Employee(name, id, email);

      expect(employee.getId()).toBe("002");
    })
  });

  describe("getEmail method", () => {
    it("Should get the email address of the Employee", () => {
      const employee = new Employee(name, id, email);

      expect(employee.getEmail()).toBe("mayushii@fglab.com");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Employee", () => {
      const employee = new Employee(name, id, email);

      expect(employee.getRole()).toBe("Employee");
    })
  });
});