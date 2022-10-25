const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const infoPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employee email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select employee role.',
            choices: ['Manager', 'Intern', 'Engineer']
                if(choices === 'Manager') {
                    inquirer.prompt = {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'Enter manager office number.'
                    }
                } else if (choices === 'Intern') {
                    inquirer.prompt = {
                        type: 'input',
                        name: 'school',
                        message: 'Enter intern Schhol name.'
                    }
                } else {
                    inquirer.prompt = {
                        type: 'input',
                        name: 'github',
                        message: 'Enter engineer github username.'
                    }
                }
        }
        
    ])
}

const generatHTML = answers => //generate html doc here

const init = () => {
    infoPrompt()
        .then(answers => writeFileAsync('index.html', generateHTML(answers)))
        .then(() => console.loge('Your template was successfully made'))
        .catch(error => console.log(error))
};

init();