const readmeTemplatePieces = require("./readmeTemplatePieces")
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
        type: "confirm",
        name: "needVisuals",
        message: "Do you have any visuals you would like to add?"
    },
    {
        type: "input",
        name: "visuals",
        message: "Input the path to each of your visuals, if there is more than 1 visual separate them with one space",
        when: (answers) => answers.needVisuals === true
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
            "BSD",
            "MIT",
            "Apache",
            "None",
        ]
    },
    {
        type: "confirm",
        name: "needLicenseCreated",
        message: "Would you like a License.txt file added to your project along with the README?",
        when: (answers) => answers.license != "none"
    },
    {
        type: "input",
        name: "contributions",
        message: "who has contributed to your project?"
    },
]



inq.prompt(promptQuestions).then((answers) => {

    fs.writeFile("README.md", readmeTemplatePieces.readmeTemplateConstructor(answers), function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("README creation success")
        }
    });
});