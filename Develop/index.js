// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Include js to generate the license badge
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["Enter the name of your project:", "Describe your Project:", "How do you install your application?", "How do you use your application?", "How can users contribute to your application?", "How do you test your application?", "Choose your license:", "Enter your Github username:", "Enter your email address:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contribution',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'link',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
        ])
};

// Function call to initialize app
init();
