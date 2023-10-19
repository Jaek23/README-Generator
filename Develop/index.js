// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
 const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
          type: 'input',
          message: 'Provide a short description for your project.',
          name: 'description',
        },
      {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for usage.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
      },
      {
          type: 'list',
          message: 'Select which license you used for you project.',
          choices: ['MIT','Apache 2.0','Mozilla 2.0', 'Boost Software 1.0' ],
          name: 'license'
        },
      {
        type: 'input',
        message: 'Provide guidelines on how other developers can contribute.',
        name: 'contributions',
      },
      {
        type: 'input',
        message: 'Provide your tests for your application.',
        name: 'test',
      },
      {
        type: 'input',
        message: 'what is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your GitHub account?',
        name: 'github',
      },
];

// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err){
            return console.log(err)
        }
        else {
            console.log("success")
        }
    })
 }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(data){
        writeToFile("README.md", generateMarkdown(data));
    }) 
}

// Function call to initialize app
init();
