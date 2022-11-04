const inquirer = require('inquirer');
const fs = require('fs');
const Mngr = require('./lib/manager');
const Engine = require('./lib/Engineer');
const Intern = require('./lib/intern');
const { exit } = require('process');
const generateHTML = require('./src/templateHelper');

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
};

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
        //console.log(answers);
        const newEngine = new Engine(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(newEngine)
        //console.log(newEngine)
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
        //console.log(answers);
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(newIntern)
        //console.log(teamMembers)
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
        if(answer.leaveORstay === 'Y') {
            return nowWhat();
        } 
        console.log(teamMembers)
        fs.writeFile('./dist/index.html', generateHTML(teamMembers), () => {
            err => console.log(err);
        })
    })
    .then(() => console.log('Your info was submitted'))
    .catch(error => console.log(error))
};

managerPrompt();