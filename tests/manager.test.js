const Manager = require('../lib/manager');
const managerInfo = new Manager('Alisson Doe', '5622', 'aldoe@email.com', '12');

test('test  if able to grab constructor values for object: managerInfo', () => {
    expect(managerInfo.name).toBe('Alisson Doe');
    expect(managerInfo.id).toBe('5622');
    expect(managerInfo.email).toBe('aldoe@email.com');
    expect(managerInfo.officeNumber).toBe('12');
});

test('test if able to grab name from getName()', () => {
    expect(managerInfo.getName()).toBe('Alisson Doe');
});

test('test if able to grab name from getId()', () => {
    expect(managerInfo.getId()).toBe('5622');
});

test('test if able to grab name from getEmail()', () => {
    expect(managerInfo.getEmail()).toBe('aldoe@email.com');
});

test('test if able to grab name from getofficeNumber()', () => {
    expect(managerInfo.getofficeNumber()).toBe('12');
});

test('test if able to grab name from getRole()', () => {
    expect(managerInfo.getRole()).toBe('Manager');
});