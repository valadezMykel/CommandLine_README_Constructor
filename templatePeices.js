module.exports = {

templateConstructor: function (answers){

    const titleSection = `
# ${answers.title}
<br />

`;
    const linksSection = `
    ## Links 
    
    `;
    const repoLinkSection = `
For the Repository link click [here](${answers.repoLink})

`;
    const deployedLinkSection = `
For a link to the deployed project click [here](${answers.deployedLink})

`;
    const tableOfContentsPlus = `
## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)


## About the Project

${answers.description}


## Installation

${answers.installation}


## Usage

${answers.usage}`;

    if(answers.needRepoLink && answers.needDeployedLink){
        return titleSection+linksSection+repoLinkSection+deployedLinkSection+tableOfContentsPlus;
    }
    else if(answers.needRepoLink){
        return titleSection+linksSection+repoLinkSection+tableOfContentsPlus;
    }
    else if(answers.needDeployedLink){
        return titleSection+linksSection+deployedLinkSection+tableOfContentsPlus;
    }
    else{
        return titleSection+tableOfContentsPlus;
    }

}}
