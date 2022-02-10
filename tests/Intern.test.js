const Intern = require ('../lib/Intern')

describe (`Intern`, () => {
    it (`should take in inputs from employee (name, id, email) and the school and return it back`, () => {
        const intern = new Intern ('Brittany Klose', 22, 'brittany.klose@yahoo.com', 'University of Tampa')
        expect(intern.name).toEqual('Brittany Klose')
        expect(intern.id).toEqual(22)
        expect(intern.email).toEqual('brittany.klose@yahoo.com')
        expect(intern.school).toEqual('University of Tampa')
    })
})