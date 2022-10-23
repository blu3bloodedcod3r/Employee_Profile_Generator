const Employee = require('../lib/Employee')
const Intern = require('../lib/intern')

const internInfo = new Intern('Gracie Richards', '1026', 'grric@email.com', '12');

test('test  if able to grab constructor values for object: internInfo', () => {
    expect(internInfo.name).toBe('Gracie Richards');
    expect(internInfo.id).toBe('1026');
    expect(internInfo.email).toBe('grric@email.com');
    expect(internInfo.school).toBe('UCLA');
});

test('test if able to grab name from getName()', () => {
    expect(internInfo.getName()).toBe('Gracie Richards');
});

test('test if able to grab name from getId()', () => {
    expect(internInfo.getId()).toBe('1026');
});

test('test if able to grab name from getEmail()', () => {
    expect(internInfo.getEmail()).toBe('grric@email.com');
});

test('test if able to grab name from getofficeNumber()', () => {
    expect(internInfo.school()).toBe('UCLA');
});

test('test if able to grab name from getRole()', () => {
    expect(internInfo.getRole()).toBe('Intern');
});