const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'your_password',
    database: 'company_db',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');
    startApp();
  });

function startApp() {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'How would you like to proceed?',
        choices: [
            'Browse all departments',
            'Browse all roles',
            'Browse all employees',
            'Add a new department',
            'Add a new role',
            'Add a new employee',
            'Update employee role',
          'Finish',
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Browse all departments':
            displayDepartments();
            break;
          case 'Browse all roles':
            displayRoles();
            break;
          case 'Browse all employees':
            displayEmployees();
            break;
          case 'Add a new department':
            appendDepartment();
            break;
          case 'Add a new role':
            appendRole();
            break;
          case 'Add a new employee':
            appendEmployee();
            break;
          case 'Update employee role':
            updateEmployeeRole();
            break;
          case 'Finish':
            connection.end();
            break;
        }
      });
  }

function displayDepartments() {}
function displayRoles() {}
function displayEmployees() {}
function appendDepartment() {}
function appendRole() {}
function appendEmployee() {}
function updateEmployeeRole() {}
