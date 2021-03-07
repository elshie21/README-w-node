// function to generate markdown for README
function generateMarkdown(data) {
`https://github.com/elshie21/README-w-node# ${data.title}
 Description
 ${data.Description}
  Features
  Installation *optional
  Contributions
  Acceptance criteria 
  Questions
  License
  // the following must be able to run on the terminal with node.js
   all information is accessible through Github

`;
}

module.exports = generateMarkdown;
