// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init()

// list of questions for the users
'use strict';
 var inquirer = require ("questions")
 
 inquirer
 .prompt([
     {
         type:"input",
         message:"what is the name of the repository",
         name: "title"



     },
     { 
         type:"input",
         message:"dedcribe what is the purpose of the project?",
         name: "Description"  
     },
       {
       type:"input",
       message:"what features were used for this project?",
       name: "features" 

       },
        {
        type:"input",
        message:"how does the installation work?",
        name: "Installations" 
        },
        
        {
       type:"input",
       message:" Any questions?",
       name: "question" 

       },
        {
        type:"input",
        message:"license",
        name: "license" 
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
      });
        
        


       


