// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = 'None') {
    return ``
  } else {
    license = license.split(' ').join('')
    return `![badge](https://shields.io/badge/license-${license}-blue)`
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'None') {
    return ``
  } else {
    return `- [License](#License)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = 'None') {
    return ``
  } else {
    return `## License
    ${license}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  [GitHub](https://github.com/${data.github})

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
