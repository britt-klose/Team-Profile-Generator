const Engineer = require ('../lib/Engineer')

describe ('Engineer', () => {
    it ('should take in the inputs from employee and github username and return it back', () =>{
        const engineer = new Engineer('Brittany Klose', 22, 'brittany.klose@yahoo.com', 'britt-klose')
        expect(engineer.name).toEqual('Brittany Klose')
        expect(engineer.id).toEqual(22)
        expect(engineer.email).toEqual('brittany.klose@yahoo.com')
        expect(engineer.githubt).toEqual('britt-klose')
    })
})