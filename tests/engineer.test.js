const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer')

const engineerInfo = new Engineer('Tommy Pickles', '7230', 'topic@email.com', 'githubName@github.com');

test('test  if able to grab constructor values for object: engineerInfo', () => {
    expect(engineerInfo.name).toBe('Tommy Pickles');
    expect(engineerInfo.id).toBe('1026');
    expect(engineerInfo.email).toBe('topic@email.com');
    expect(engineerInfo.getGithub).toBe('githubName@github.com');
});

test('test if able to grab name from getName()', () => {
    expect(engineerInfo.getName()).toBe('Tommy Pickles');
});

test('test if able to grab name from getId()', () => {
    expect(engineerInfo.getId()).toBe('1026');
});

test('test if able to grab name from getEmail()', () => {
    expect(engineerInfo.getEmail()).toBe('topic@email.com');
});

test('test if able to grab name from getGithub()', () => {
    expect(engineerInfo.getGithub()).toBe('githubName@github.com');
});

test('test if able to grab name from getRole()', () => {
    expect(engineerInfo.getRole()).toBe('Engineer');
});