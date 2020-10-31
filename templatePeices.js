module.exports = {

    templateConstructor: function (answers) {

        const titleSection = `
# ${answers.title}
<br />
`;
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

${answers.usage}`;

        let resultTOSend = titleSection;
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
