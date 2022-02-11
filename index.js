const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Function HTML
const generateHTML = require('./src/index.html');

//Function Inquirer
const teamArray =[];

//if have time add validation to ensure that user input is correct.
const teamMngr = () => {
    return(
        inquirer
        .prompt([
            {
                // Prompts for manager's name"
                type: 'input',
                message: 'Enter team manager name?',
                name: 'name',
            },
            {
                // Prompts for manager's employee ID"
                type: 'input',
                message: 'Enter employee ID ',
                name: 'id',
            },
                //prompt for manager's email address
            {
                type: 'input',
                message: 'Enter manager email address',
                name: 'email',
            },
                //prompt for manager's office number
            {
                type: 'input',
                message: 'Enter manager office number',
                name: 'officeNum',
            },
        ])
    )
    .then(data => {
        const manager= new Manager (data.name, data.id, data.email, data.officeNum);
        teamArray.push(manager);
    })
}
