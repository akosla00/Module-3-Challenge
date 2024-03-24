// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = () => {
  // TODO: Get user input to create and return an array of employee objects
  let employees = [];

  let addMore = true;

  while (addMore) {
    let firstName = prompt("Enter employee first name.");
    let lastName = prompt("Enter employee last name.");
    let salaryInput = prompt("Enter employee salary.");
    let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    let addAnother = confirm("Do you want to add another employee?");
    if (addAnother !== true) {
      addMore = false;
    }
  }

  return employees;

}

// Display the average salary
const displayAverageSalary = (employeesArray) => {
  // TODO: Calculate and display the average salary
  let sum = 0
  for (const { salary } of employeesArray) {
    sum += salary;

  }
  average = sum / employeesArray.length;

  console.log(`The average salaray is ${average} betweeen ${employeesArray.length} employees.`);
}

// Select a random employee
const getRandomEmployee = (employeesArray) => {
  // TODO: Select and display a random employee

  const random = Math.round(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[random];
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our random drawing!`);


}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/


// Display employee data in an HTML table
const displayEmployees = (employeesArray) => {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = () => {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
