module.exports = {

    templateConstructor: function (answers) {

        const titleSection = `
# ${answers.title}
<br />

`;
        if(answers.needDeployedLink || answers.needRepoLink){
        var linksSection = `
## Links 

`;}
        if (answers.needRepoLink) {
            linksSection += `
For the Repository link click [here](${answers.repoLink})

`;
        };
        if (answers.needDeployedLink) {
            var deployedLinkSection = `
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

        if (answers.needRepoLink && answers.needDeployedLink && answers.needVisuals) {
            return titleSection + linksSection + repoLinkSection + deployedLinkSection + tableOfContents + visuals + aboutAndTheRest;
        }
        else if (answers.needRepoLink) {
            return titleSection + linksSection + repoLinkSection + tableOfContents;
        }
        else if (answers.needDeployedLink) {
            return titleSection + linksSection + deployedLinkSection + tableOfContents;
        }
        else {
            return titleSection + tableOfContentsPlus;
        }

        let resultTOSend = titleSection;
        if(answers.needRepoLink && answers.needDeployedLink){
            
        }

    }
}
