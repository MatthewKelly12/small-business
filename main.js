// A small business wants to keep track of its employees
//  and the computers that they use. Each employee is assigned
//  to a department, and they each get assigned a computer when
//   they join the company.

// Build arrays of objects that represent Employees, Departments, and Computers.
// Assign every resource a unique id property.
// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card
//  for each employee. It should display the employee name, the name of
//  their department, and which computer they are using

const Database = {
    "departments": [
        {
            "departmentId": 1,
            "name": "IT"
        },
        {
            "departmentId": 2,
            "name": "Marketing"
        },
        {
            "departmentId": 3,
            "name": "HR"
        }
    ],
    "employees": [
        {
            "employeeId": 1,
            "firstName": "Jisie",
            "lastName": "David",
            "departmentId": 1

        },
        {
            "employeeId": 2,
            "firstName": "Kimmy",
            "lastName": "Bird",
            "departmentId": 1
        },
        {
            "employeeId": 3,
            "firstName": "Mandy",
            "lastName": "Arola",
            "departmentId": 2
        },
        {
            "employeeId": 4,
            "firstName": "Patty",
            "lastName": "Cake",
            "departmentId": 3
        },
        {
            "employeeId": 5,
            "firstName": "Joe",
            "lastName": "Dude",
            "departmentId": 1
        }
    ],
    "computers" : [
        {
            "computerId": 1,
            "name": "R2-D2",
        },
        {
            "computerId": 2,
            "name": "C-3P0",
        },
        {
            "computerId": 3,
            "name": "BB-8",
        },
        {
            "computerId": 4,
            "name": "BB-9E",
        },
        {
            "computerId": 5,
            "name": "808-B",
        },
    ],
    "employeeComputers": [
        {
            "employeeComputerId": 1,
            "computerId": 1,
            "employeeId": 1,
        },
        {
            "employeeComputerId": 2,
            "computerId": 3,
            "employeeId": 2,
        },
        {
            "employeeComputerId": 3,
            "computerId": 4,
            "employeeId": 3,
        },
        {
            "employeeComputerId": 4,
            "computerId": 5,
            "employeeId": 4,
        },
        {
            "employeeComputerId": 5,
            "computerId": 2,
            "employeeId": 5,
        }
    ]
  }

//   console.log(Database)
//   console.log(Database.departments)
//   console.log(Database.employees)
//   console.log(Database.computers)
//   console.log(Database.employeeComputers)

//   console.log(Database.employees[0].firstName)
//   console.log(Database.employees[0].lastName)
//   console.log(Database.departments[0].name)
//   console.log(Database.computers[0].name)
