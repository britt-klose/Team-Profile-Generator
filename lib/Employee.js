// The first class is an Employee parent class with the following properties and methods:
//name
// id
// email
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

getName(){
    return this.name;
}
getId(){
    return this.id;
}

getEmail(){
    return this.email;
}
getRole(){
    return 'Employee';

module.exports = Employee;

//The other three classes will extend Employee.
//it’s not a requirement, but consider adding validation to ensure that user input is in the proper format.