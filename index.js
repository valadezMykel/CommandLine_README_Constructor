const inquirer = require("inquirer");

const inq = require("inquirer");
const fs = require("fs");

const promptQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
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



inq.prompt(promptQuestions).then((answer) => {

    const ReadmeTemplate = `
# ${answer.title}
<br />


## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)


## About the Project

${answer.description}


## Installation

${answer.installation}


## Usage

${answer.usage}


## License

${answer.license}


## Contributors

${answer.contributions}
`;

    console.log(answer)
    fs.writeFile("README.md", ReadmeTemplate, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("success")
        }
    });
});