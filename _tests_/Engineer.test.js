const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('Create new Engineer object', () => {
    const engineer = new Engineer('Itaru Hashida', '003', 'daru@futuregadgetlab.com', 'daru');

    expect(engineer.name).toBe('Itaru Hashida');
    expect(engineer.id).toBe('003');
    expect(engineer.email).toBe('daru@futuregadgetlab.com');
    expect(engineer.github).toBe('daru');
  });

  describe('getGithub method', () => {
    it('Should get the GitHub username of the Engineer', () => {
      const engineer = new Engineer('Itaru Hashida', '003', 'daru@futuregadgetlab.com', 'daru');

      expect(engineer.getGithub()).toBe('daru');
    })
  });

  describe('getRole method', () => {
    it('Should get the role of the Engineer', () => {
      const engineer = new Engineer('Itaru Hashida', '003', 'daru@futuregadgetlab.com', 'daru');

      expect(engineer.getRole()).toBe('Engineer');
    })
  });
});