//Imports required Classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//Import required packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Output Directory and file path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Import relevent HTML Template
const generateTeam = require("./src/page-template.js")

//Empty array of Team
teamArray = [];


//Team App starts here
const teamApp = () => {
  
  /*--------------------------------------------------------------*/
  /*                       Adding team members form option        */
  /*--------------------------------------------------------------*/

  const createTeam = () => {
    inquirer.prompt([{
      type: "list",
      message: "The type of employee to be added to your team?",
      name: "employeeOption",
      choices: ["Manager", "Engineer", "Intern", "no more."]
    }])
    .then(function (userInput) {
      switch(userInput.employeeOption) {
        case "Manager":
          addManager();
          break;

        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        default:
          htmlCreator();
      }
    })
  }

  /*--------------------------------------------------------------*/
  /*                      Input Data for Manager                  */
  /*--------------------------------------------------------------*/
  const addManager = () => {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "Please enter the full name of the manager:"
      },

      {
        type: "input",
        name: "managerId",
        message: "Please enter the manager's employee ID number:"
      },

      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the manager's email address:"
      },

      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter the manager's office number:"
      }

    ]).then(inputData => {
      const manager = new Manager(inputData.managerName, inputData.managerId, inputData.managerEmail, inputData.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });

  }

  /*--------------------------------------------------------------*/
  /*                      Input Data for Engineer                 */
  /*--------------------------------------------------------------*/
  const addEngineer = () => {
      inquirer.prompt([
        
        {
          type: "input",
          name: "engineerName",
          message: "Please enter the engineer's full name:"
        },

        {
          type: "input",
          name: "engineerId",
          message: "Please enter the engineer's employee ID number:" 
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "Please enters the engineer's email address:"
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "Please enter the engineer's GitHub username:"
        }

      ]).then(inputData => {
        const engineer = new Engineer(inputData.engineerName, inputData.engineerId, inputData.engineerEmail, inputData.engineerGithub);
        teamArray.push(engineer);
        createTeam();
      });

    }
    
    /*--------------------------------------------------------------*/
    /*                      Input Data for Intern                */
    /*--------------------------------------------------------------*/
    const  addIntern = () =>{
      inquirer.prompt([
        
        {
          type: "input",
          name: "internName",
          message: "Please enter the intern's name:"
        },

        {
          type: "input",
          name: "internId",
          message: "Please enter the intern's employee ID number:" 
        },

        {
          type: "input",
          name: "internEmail",
          message: "Please enter the intern's email address:"
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?"
        }

      ]).then(inputData => {
        const intern = new Intern(inputData.internName, inputData.internId, inputData.internEmail, inputData.internSchool);
        teamArray.push(intern);
        createTeam();
      });

    }

  /*--------------------------------------------------------------*/
  /*                      Generate the HTML File                  */
  /*--------------------------------------------------------------*/  

  const  htmlCreator = () => {
      console.log("Team created!")

      fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

  }

  return createTeam();

  }

return teamApp();