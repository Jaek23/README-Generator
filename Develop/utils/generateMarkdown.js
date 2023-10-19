// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = " ";
  if(license === 'MIT'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }else if (license === 'Apache 2.0'){
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }else if (license === 'Mozilla 2.0'){
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  }else if (license === 'Boost Software 1.0'){
    badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
  }else {
    badge = " "
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = " ";
  if(license === 'MIT'){
    link = 'https://opensource.org/licenses/MIT'
  }else if (license === 'Apache 2.0'){
    link = 'https://opensource.org/licenses/Apache-2.0'
  }else if (license === 'Mozilla 2.0'){
    link = 'https://opensource.org/licenses/MPL-2.0'
  }else if (license === 'Boost Software 1.0'){
    link = 'https://www.boost.org/LICENSE_1_0.txt'
  }else {
    link = " "
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = " ";
  if (license === 'none'){
    section = " "
  }else {
    section = `${license}`
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # ${renderLicenseBadge(data.license)} 

  ## Description 
  ### ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ### ${data.installation}

  ## Usage 
  ### ${data.usage}

  ## Credits
  ### ${data.credits}

  ## License
  ### This project is under ${renderLicenseSection(data.license)} license.
  ### ${renderLicenseLink(data.license)}

  ## Contributions
  ### ${data.contributions}

  ## Tests
  ### ${data.test}

  ## Questions 
  ### If you have additional questions, you can contact me at: 
  ### Email: ${data.email}
  ### GitHub: ${data.github}
`
}

module.exports = generateMarkdown;
