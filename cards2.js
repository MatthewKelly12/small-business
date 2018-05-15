function cards () {
    let  artMain = document.getElementById("articleMain");

    let what = Database.employees.forEach(
        function (x) {
            let cardDiv = document.createElement("div");
            artMain.appendChild(cardDiv);

            let namePar = document.createElement("p");
            namePar.textContent = `Employee Name: ${x.firstName} ${x.lastName}`;
            cardDiv.appendChild(namePar);

            let match = x.departmentId;
            let dept = Database.departments.find(
                function (id) {
                    if (match === id.departmentId) {
                        let deptPar = document.createElement("p");
                         deptPar.textContent = `Department: ${id.name}`;
                        cardDiv.appendChild(deptPar);
                    }

                    console.log(id)
                    console.log(id.departmentId)
                });





            console.log(x.firstName)
            console.log(x.lastName)
        }
    )
}

cards();

