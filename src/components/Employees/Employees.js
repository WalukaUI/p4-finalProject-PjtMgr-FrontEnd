import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import Loading from "../LoadingAnimation/Loading";
import "./Employees.css";
import BASE_URL from "../../constraints/URL"

function Employees({cities, depts}) {
  const [employees, setEmployees] = useState(null);
  // const [cities, setCities] = useState([]);
  const [addEmployeeForm, setAddEmpForm] = useState(false);
  const [addEmployee, setAddEmployee] = useState({});

  //GET EMPLOYEES--------------
  useEffect(() => {
    fetch(BASE_URL + `/employees`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          return setEmployees(data);
        });
      }
    });
  }, []);
  // //GET Cities--------------------

  //   useEffect(async () => {
  //      await fetch(BASE_URL + `/cities`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     credentials: "include",
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
  //         console.log(data);
  //         setCities(data);
  //       });
  //     }
  //   });
  // }, []);
    //GET EMPLOYEES----------------

     useEffect(() => {
      fetch(BASE_URL + `/employees`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            return setEmployees(data);
          });
        }
      });
    }, []);

  //DELETE EMPLOYEE ${URL}----------

  function deleteEmployee(id) {
    fetch(BASE_URL + `/employees/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    const newEmp = employees.filter((person) => person.id !== id);
    setEmployees(newEmp);
  }

  //PATCH EMPLOYEE ${URL}------------

  function updateEmployee(employeObject, id) {
    let data = { ...employeObject, "id": id };

    fetch(BASE_URL + `/employees/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((emp) => {
        const newEmployee = employees.filter(
          (person) => person.id !== employeObject.id
        );

        setEmployees([...newEmployee, emp]);
      });
  }
  //CREATE EMPLOYEE  ${URL}-------------

  function createEmployee(newEmpObject) {
    fetch(BASE_URL + `/employees`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newEmpObject),
    })
      .then((res) => res.json())
      .then((newPerson) => setEmployees([...employees, newPerson]));
  }

  //-----------------supportive functions--------------------------
  
  function toggleForm(e) {
    e.preventDefault();
    setAddEmpForm(!addEmployeeForm);
  }

  function createNewEmployee(e) {
    e.preventDefault();
    setAddEmpForm(!addEmployeeForm);
    createEmployee(addEmployee);
  }

  function handleAddEmployee(e) {
    e.preventDefault();
    let newEmp = { ...addEmployee, [e.target.name]: e.target.value };
    setAddEmployee(newEmp);
  }

   return (
    <>
      <div className="formDiv">
        <div>
          <button
            className={`btn btn-outline-${addEmployeeForm ? "danger" : "info"}`}
            onClick={toggleForm}
          >
            {addEmployeeForm ? "Cancel" : "Add a new Employee"}
          </button>
        </div>
        <div className={addEmployeeForm ? "display formDiv" : "hidden"}>
          <form onSubmit={createNewEmployee}>
            <label>
              Name
              <input
                className="form-control form-control-sm"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleAddEmployee}
              />
            </label>
            <label>
              Role
              <input
                className="form-control form-control-sm"
                name="role"
                placeholder="Role"
                onChange={handleAddEmployee}
              />
            </label>
            <label>
              Section
                <select
                className="form-select"
                name="section"
                onChange={handleAddEmployee}
              >
                <option value={null}>Select</option>
                <option value="Purchasing">Purchasing</option>
                <option value="Audit">Audit</option>
                <option value="HR">HR</option>
                <option value="Transport">Transport</option>
                <option value="Security">Security</option>
                <option value="Finance"> Finance</option>
              </select>
            </label>
            <label>
              Department
              <select
                className="form-select"
                name="department_id"
                aria-label="Default select example"
                onChange={handleAddEmployee}
              >
                {depts.map((dpt)=><option value={dpt.id}>{dpt.name}</option>)}
              </select>
            </label>
            <label>
              City
              <select
                className="form-select"
                name="city_id"
                aria-label="Default select example"
                onChange={handleAddEmployee}
              >
              {cities.map((cty)=><option value={cty.id}>{cty.name}</option>)}
              </select>
            </label>
            <div className="col-sm">
              <button className=" btn btn-success createEmpBtn" type="submit">
                Create Employee
              </button>
            </div>
          </form>
        </div>
      </div>

      {employees !== null ? (
        employees.map((card, idx) => {
          return (
            <EmployeeCard
              key={card.id}
              cities={cities}
              depts={depts}
              idx={idx}
              card={card}
              deleteEmployee={deleteEmployee}
              updateEmployee={updateEmployee}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Employees;
