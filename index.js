const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//const { exit } = require('process');
const Mngr = require('./lib/manager')
const Engine = require('./lib/Engineer')
const Intern = require('./lib/intern');
const { exit } = require('process');


const writeFileAsync = util.promisify(fs.writeFile);

const teamMembers = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        }
    ]).then(answers => {
        console.log(answers);
        const newMngr = new Mngr(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(newMngr)
        nowWhat();
    }) 
};

function nowWhat() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Which type of team meber would you like to add?',
            choices: ['Intern', 'Engineer', 'Exit']
        },
    ]).then(answer =>  { 
        console.log(answer);
        if(answer.newTeamMember === 'Engineer') {
            addEngineer()
        } else if(answer.newTeamMember === 'Intern') {
            addIntern()
        } else {
            addAnother()
        }
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's github username?",
        }
        
    ]).then(answers => {
        console.log(answers);
        const newEngine = new Engine(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(newEngine)
        nowWhat();
    })
    
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does your intern attend?",
        }
        
    ]).then(answers => {
        console.log(answers);
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(newIntern)
        nowWhat();
    })
    
};

const addAnother = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'leaveORstay',
            message: 'Would you like to add another new employee?',
            choices: ['Y', 'N']
        },
    ]).then(answer =>  { 
        console.log(answer);
        if(answer.leaveORstay === 'Y') {
            nowWhat()
        } else {
           exit
        } 
    })
}


// const generatHTML = answers => `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div>
//     ${data.map(employee) => {
//         <div>
//             <h5>${employee.name}</h5>
//             <h6>${employee.officeNumber}${employee.github}${employee.school}${employee.role}</h6>
//         </div>
//         <ul>
//             <li>ID: ${employee.id}</li>
//             <li>E-mail: ${employee.email}</li>
//             <li>Name: ${employee.name}</li>
//         </ul>
//     }}
//     </div>
    
// </body>
// </html>`

// const init = () => {
//     managerPrompt()
//         .then(answers => writeFileAsync('index.html', generateHTML(answers)))
//         .then(() => console.log('Your template was successfully made'))
//         .catch(error => console.log(error))
// };

// init();

managerPrompt();
