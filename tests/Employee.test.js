const Employee = require('../lib/Employee')

describe('Employee', () => {
    it ('should take in the name, id, and email and return it back', () => {
        const employee = new Employee('Brittany Klose', 22, 'brittany.klose@yahoo.com')
        expect(employee.name).toEqual('Brittany Klose')
        expect(employee.id).toEqual(22)
        expect(employee.email).toEqual('brittany.klose@yahoo.com')
    })
})