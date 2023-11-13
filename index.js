import mysql from 'mysql2'

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
    choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee','update an employee',]
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
      prompt([{
        type: 'input',
        name: 'department',
        message: 'enter name of department...'
      }])
      db.query(
        'INSERT INTO department (name)',
        function(err,result){
          if(err){
            console.log(err)
          }
          console.log(result)
        }
      )
      }
    else if(answers.selectone === 'add a role'){

      }
    else if(answers.selectone === 'add an employee'){

      }
    else if(answers.selectone === 'update an employee'){

      }
  })
  //.catch((error) => {
   // if (error.isTtyError) {
      
   // } else {
      
    //}
  //})