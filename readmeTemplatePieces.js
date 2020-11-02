module.exports = {

    readmeTemplateConstructor: function (answers) {

        const titleSection = `
# ${answers.title}
<br />
`;
        let licenseBadgeSection;
        switch(answers.license){
            case "none":
                licenseBadgeSection =  "";
                break;
            case "BSD":
                licenseBadgeSection = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
                break;
            case "MIT":
                licenseBadgeSection ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "Apache":
                licenseBadgeSection ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
        };
        if (answers.needDeployedLink || answers.needRepoLink) {
            var linksSection = `
## Links 

`;
        }
        if (answers.needRepoLink) {
            linksSection += `
For the Repository link click [here](${answers.repoLink})

`;
        };
        if (answers.needDeployedLink) {
            linksSection += `
For a link to the deployed project click [here](${answers.deployedLink})

`;
        };
        const tableOfContents = `
## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Questions](#questions)

`;
        let visuals = "";
        if (answers.needVisuals) {
            const visualsArray = answers.visuals.split(" ");
            for (const visual of visualsArray) {
                visuals += (`![placeholder](${visual})

`);
            };
        }
        const aboutAndTheRest = `
## About the Project

${answers.description}


## Installation

${answers.installation}


## Usage

${answers.usage}


## License

${answers.license}


## Contributors

${answers.contributions}


## Questions

If you have questions reach out by email at ${answers.contactEmail}`;

        let resultTOSend = titleSection+licenseBadgeSection;
        if (answers.needRepoLink || answers.needDeployedLink) {
            resultTOSend += linksSection;
        };
        resultTOSend += tableOfContents;
        if (answers.needVisuals) {
            resultTOSend += visuals;
        };
        resultTOSend += aboutAndTheRest;

        return resultTOSend;

    }
}
