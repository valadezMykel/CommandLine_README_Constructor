const templatePieces = require("./templatePeices")
const inq = require("inquirer");
const fs = require("fs");

const promptQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "confirm",
        name: "needRepoLink",
        message: "Do you have a link to the project repository?"
    },
    {
        type: "input",
        name: "repoLink",
        message: "Input your repository link",
        when: (answers) => answers.needRepoLink === true
        
    },
    {
        type: "confirm",
        name: "needDeployedLink",
        message: "Do you have a link to your deployed project"
    },
    {
        type: "input",
        name: "deployedLink",
        message: "Input a link to your deployed project",
        when: (answers) => answers.needDeployedLink === true
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to installing your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What can your project be used for?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license does your project use?",
        choices: [
            "MIT",
            "None",
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "who has contributed to your project?"
    },
]



inq.prompt(promptQuestions).then((answers) => {

//     const ReadmeTemplate = `
// # ${answers.title}
// <br />


// ## Table of Contents

// * [About the Project](#about-the-project)
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributors](#contributors)


// ## About the Project

// ${answers.description}


// ## Installation

// ${answers.installation}


// ## Usage

// ${answers.usage}


// ## License

// ${answer.license}


// ## Contributors

// ${answers.contributions}
// `;

    console.log(answers)
    fs.writeFile("README.md", templatePieces.templateConstructor(answers), function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("success")
        }
    });
});