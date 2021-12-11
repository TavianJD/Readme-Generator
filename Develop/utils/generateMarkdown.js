// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `\n *[License](#license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
      This project is licensed under the ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("GENERATE MARKDOWN DATA", data)
  return `# ${data.Project}
  ${renderLicenseBadge(data.licenses)}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.licenses)}


## Installation

${data.Install}

## Usage

${data.Usage}



${renderLicenseSection(data.licenses)}

`;
}

module.exports = generateMarkdown;
