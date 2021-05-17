const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('Create new Employee object', () => { 
    const employee = new Employee('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com');

    expect(employee.name).toBe('Rintaro Okabe');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('okarin@futuregadgetlab.com')
  });

  describe('getName method', () => {
    it('Get Name of Employee', () => {
      const employee = new Employee('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com');

      expect(employee.getName()).toBe('Rintaro Okabe');
    })
  });

  describe('getId method', () => {
    it('Get ID of Employee', () => {
      const employee = new Employee('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com');

      expect(employee.getId()).toBe('001');
    })
  });

  describe('getEmail method', () => {
    it('Get Email of Employee', () => {
      const employee = new Employee('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com');

      expect(employee.getEmail()).toBe('okarin@futuregadgetlab.com');
    })
  });

  describe('getRole method', () => {
    it('Get Role of Employee', () => {
      const employee = new Employee('Rinato Okabe', '001', 'okarin@futuregadgetlab.com');

      expect(employee.getRole()).toBe('Employee');
    })
  });
});