function makeCards () {
    let artMain = document.getElementById("articleMain");

    for (let i = 0; i < Database.employees.length; i++) {

        let divCard = document.createElement("div");
        artMain.appendChild(divCard);
        let parName = document.createElement("p");
        parName.textContent = `Employee Name: ${Database.employees[i].firstName} ${Database.employees[i].lastName}`;
        divCard.appendChild(parName);

            for (let j = 0; j < Database.departments.length; j++) {
                if (Database.employees[i].departmentId === Database.departments[j].departmentId) {
                    let parDepartment = document.createElement("p");
                    parDepartment.textContent = `Department Name: ${Database.departments[j].name}`;
                    divCard.appendChild(parDepartment);
                }
            }
            for (let z = 0; z < Database.employeeComputers.length; z++) {
                for (let r = 0; r < Database.computers.length; r++) {
                    if (Database.employeeComputers[z].employeeId === Database.employees[i].employeeId
                        && Database.employeeComputers[z].computerId === Database.computers[r].computerId) {
                            let parComputer = document.createElement("p");
                            parComputer.textContent = `Computer Name: ${Database.computers[r].name}`;
                            divCard.appendChild(parComputer);
                        }
                }

            }
         }
}

console.log(Database.employees.length)
console.log(Database.departments.length)
console.log(Database.employeeComputers.length)
console.log(Database.computers.length)



makeCards();

