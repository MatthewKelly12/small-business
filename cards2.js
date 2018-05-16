function cards () {
    let  artMain = document.getElementById("articleMain");

    let what = Database.employees.forEach(
        function (x) {
            let cardDiv = document.createElement("div");
            artMain.appendChild(cardDiv);

            let namePar = document.createElement("p");
            namePar.textContent = `Employee Name: ${x.firstName} ${x.lastName}`;
            cardDiv.appendChild(namePar);

            let departMatch = x.departmentId;
            let dept = Database.departments.find(
                function (id) {
                    if (departMatch === id.departmentId) {
                        let deptPar = document.createElement("p");
                         deptPar.textContent = `Department: ${id.name}`;
                        cardDiv.appendChild(deptPar);
                    }
                });
                let empComp = Database.employeeComputers.find(
                    function (empComp) {
                        if (x.employeeId === empComp.employeeId) {
                            return empComp.computerId;
                        }
                    }
                )
                let comp = Database.computers.find(
                    function (comp) {
                        if (empComp.computerId === comp.computerId) {
                            let compNamePar = document.createElement("p");
                            compNamePar.textContent = `Computer: ${comp.name}`;
                           cardDiv.appendChild(compNamePar);
                        }
                        console.log(comp.computerId)
                        console.log(comp.name)
                    }
                )
        }
    )
}
cards();


