const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('Create new Intern object', () => {
    const intern = new Intern('Kurisu Makise', '004', 'christina@futuregadgetlab.com', 'Viktor Chondria University');

    expect(intern.name).toBe('Kurisu Makise');
    expect(intern.id).toBe('004');
    expect(intern.email).toBe('christina@futuregadgetlab.com');
    expect(intern.school).toBe('Viktor Chondria University');
  });

  describe('getSchool method', () => {
    it('Should get the school name of the Intern', () => {
      const intern = new Intern('Kurisu Makise', '004', 'christina@futuregadgetlab.com', 'Viktor Chondria University');

      expect(intern.getSchool()).toBe('Viktor Chondria University');
    })
  });

  describe('getRole method', () => {
    it('Should get the role of the Intern', () => {
      const intern = new Intern('Kurisu Makise', '004', 'christina@futuregadgetlab.com', 'Viktor Chondria University');

      expect(intern.getRole()).toBe('Intern');
    })
  });
});