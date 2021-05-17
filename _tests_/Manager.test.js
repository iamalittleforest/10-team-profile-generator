const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('Create new Manager object', () => {
    const manager = new Manager('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com', '5100');

    expect(manager.officeNumber).toBe('5100');
  });

  describe('getOfficeNumber method', () => {
    it('Get Office Number of Manager', () => {
      const manager = new Manager('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com', '5100');

      expect(manager.getOfficeNumber()).toBe('5100');
    })
  });

  describe('getRole method', () => {
    it('Get Role of Manager', () => {
      const manager = new Manager('Rintaro Okabe', '001', 'okarin@futuregadgetlab.com', '5100');

      expect(manager.getRole()).toBe('Manager');
    })
  });
});