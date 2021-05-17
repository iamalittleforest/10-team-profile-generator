const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('Create new Intern object', () => {
    const intern = new Intern('Kurisu Makise', '004', 'christina@futuregadgetlab.com', 'Viktor Chondria University');

    expect(intern.school).toBe('Viktor Chondria University');
  });

  describe('getSchool method', () => {
    it('Get School of Intern', () => {
      const intern = new Intern('Kurisu Makise', '004', 'christina@futuregadgetlab.com', 'Viktor Chondria University');

      expect(intern.getSchool()).toBe('Viktor Chondria University');
    })
  });

  describe('getRole method', () => {
    it('Get Role of Intern', () => {
      const intern = new Intern('Kurisu Makise', '004', 'christina@futuregadgetlab.com', 'Viktor Chondria University');

      expect(intern.getRole()).toBe('Intern');
    })
  });
});