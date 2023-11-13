import mysql from 'mysql2'
//initialize connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Stewbeefcake1232!@#',
  database: 'manager_db'
},
  console.log('connected')
)

import inquirer from 'inquirer'

inquirer
  .prompt([{
    type: 'list',
    name: 'selectone',
    choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee'] //prompting the user with many questions
  }
  ])
  .then((answers) => {
    if (answers.selectone === 'view all departments'){
      db.query(
        'SELECT * FROM department',
        function(err,result){
          if(err){
            console.log(err)
          }
          console.log(result)
        }
      )}
    else if(answers.selectone === 'view all roles'){
      db.query(
        'SELECT * FROM role',
        function(err,result){
          if(err){
            console.log(err)
          }
          console.log(result)
        }
      )
      }
    else if(answers.selectone === 'view all employees'){
      db.query(
        'SELECT * FROM employee',
        function(err,result){
          if(err){
            console.log(err)
          }
          console.log(result)
        }
      )}
    else if(answers.selectone === 'add a department'){
      inquirer.prompt([{
        type: 'input',
        name: 'department',
        message: 'enter name of department...'
      }])
      .then((departAnswer) => {
        db.query(
          'INSERT INTO department (name) VALUES (?)',
          departAnswer.department,
          function(err,result){
            if(err){
              console.log(err)
            }
            console.log(result)
          }
        )
      })
    }
    //array of questions to ask user
    else if(answers.selectone === 'add a role'){
      inquirer.prompt([
      {
        type: 'input',
        name: 'role',
        message: 'enter name of role...',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'enter salary...',
      },
    ])
      .then((roleAnswer) => {
        db.query(
          'INSERT INTO role (title, salary) VALUES (?,?)',
          [roleAnswer.role, roleAnswer.salary], // had to make the answer an array was getting error otherwise for multiple questions
          function(err,result){
            if(err){
              console.log(err)
            }
            console.log(result)
          }
        )
      })
      }
    else if(answers.selectone === 'add an employee'){
      inquirer.prompt([{
        type: 'input',
        name: 'employee',
        message: 'enter name of employee...'
      }])
      .then((employeeAnswer) => {
        db.query(
          'INSERT INTO employee (first_name) VALUES (?)',
          employeeAnswer.employee, 
          function(err,result){
            if(err){
              console.log(err)
            }
            console.log(result)
          }
        )
      })
      }
  })
  