const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('Create new Manager object', () => {
    const manager = new Manager('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com', '5100');

    expect(manager.name).toBe('Rintaro Okabe');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('okarin@futuregadgetlab.com');
    expect(manager.officeNumber).toBe('5100');
  });

  describe('getOfficeNumber method', () => {
    it('Should get the office number of the Manager', () => {
      const manager = new Manager('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com', '5100');

      expect(manager.getOfficeNumber()).toBe('5100');
    })
  });

  describe('getRole method', () => {
    it('Should get the role of the Manager', () => {
      const manager = new Manager('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com', '5100');

      expect(manager.getRole()).toBe('Manager');
    })
  });
});