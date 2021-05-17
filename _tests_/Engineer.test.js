const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('Create new Engineer object', () => {
    const engineer = new Engineer('Itaru Hashida', '003', 'daru@futuregadgetlab.com', 'daru');

    expect(engineer.github).toBe('daru');
  });

  describe('getGithub method', () => {
    it('Get GitHub of Engineer', () => {
      const engineer = new Engineer('Itaru Hashida', '003', 'daru@futuregadgetlab.com', 'daru');

      expect(engineer.getGithub()).toBe('daru');
    })
  });

  describe('getRole method', () => {
    it('Get Role of Engineer', () => {
      const engineer = new Engineer('Itaru Hashida', '003', 'daru@futuregadgetlab.com', 'daru');

      expect(engineer.getRole()).toBe('Engineer');
    })
  });
});