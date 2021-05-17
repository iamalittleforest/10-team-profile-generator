const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('Create new Employee object', () => { 
    const employee = new Employee('Mayuri Shiina', '002', 'mayushii@futuregadgetlab.com');

    expect(employee.name).toBe('Mayuri Shiina');
    expect(employee.id).toBe('002');
    expect(employee.email).toBe('mayushii@futuregadgetlab.com')
  });

  describe('getName method', () => {
    it('Get Name of Employee', () => {
      const employee = new Employee('Mayuri Shiina', '002', 'mayushii@futuregadgetlab.com');

      expect(employee.getName()).toBe('Mayuri Shiina');
    })
  });

  describe('getId method', () => {
    it('Get ID of Employee', () => {
      const employee = new Employee('Mayuri Shiina', '002', 'mayushii@futuregadgetlab.com');

      expect(employee.getId()).toBe('002');
    })
  });

  describe('getEmail method', () => {
    it('Get Email of Employee', () => {
      const employee = new Employee('Mayuri Shiina', '002', 'mayushii@futuregadgetlab.com');

      expect(employee.getEmail()).toBe('mayushii@futuregadgetlab.com');
    })
  });

  describe('getRole method', () => {
    it('Get Role of Employee', () => {
      const employee = new Employee('Mayuri Shiina', '002', 'mayushii@futuregadgetlab.com');

      expect(employee.getRole()).toBe('Employee');
    })
  });
});