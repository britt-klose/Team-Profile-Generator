const Manager = require ('../lib/Manager')

describe (`Manager`, () => {
    it (`should take in inputs from employee (name, id, email) and the office number and return it back`, () => {
        const manager = new Manager ('Brittany Klose', 22, 'brittany.klose@yahoo.com', 13)
        expect(manager.name).toEqual('Brittany Klose')
        expect(manager.id).toEqual(22)
        expect(manager.email).toEqual('brittany.klose@yahoo.com')
        expect(manager.officeNumber).toEqual(13)
    })
})