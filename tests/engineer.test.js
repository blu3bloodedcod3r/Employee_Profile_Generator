const Employee = require('../lib/Employee.js');

test('Should create an instance of class Employee', () => {
    //arrange

    //act
    const newEmployee = new Employee();
    //assert
    expect(typeof newEmployee).toBe('object')
})