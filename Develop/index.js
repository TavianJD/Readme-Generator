// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require('inquirer')
const fs = require("fs")
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: "Project",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project."
    },
    {
        type: "input",
        name: "Install",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What does user need to know before using application?"
    },
    {
        type: "input",
        name: "credits",
        message: "Any collaborators, if so list them with links to GitHub profiles."
    },
    {
        type: "list",
        name: "licenses",
        message: "Please choose a license for your project.",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions) 

.then((userInput) =>{
    writeToFile("README.md", generateMarkdown({...userInput}))
})
}

// Function call to initialize app
init();
