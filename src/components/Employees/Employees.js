import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard"
import Loading from "../LoadingAnimation/Loading"
import "./Employees.css";


function Employees({setisloggedin}) {
  const [employees, setEmployees] = useState(null);

// const URL = "https://project-manager-bkend.herokuapp.com";
  const URL = "http://localhost:3000";

//GET EMPLOYEES
  useEffect(() => {
    fetch(`${URL}/employees`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
          setisloggedin(true)
           return setEmployees(data)
          });
        } 
      });
      
  }, []);

//DELETE EMPLOYEE

function deleteEmployee(id) {
  fetch(`${URL}/employees/${id}`, { method: "DELETE",credentials: "include" });
  const newEmp = employees.filter((person) => person.id !== id);
  setEmployees(newEmp);
}

//PATCH EMPLOYEE

function updateEmployee(employeObject,id) {
  let data = { ...employeObject, ["id"]: id};

  fetch(`${URL}/employees/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
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

  return (<> 
  
  {employees !== null?  
    employees.map((card,idx) => {
    return <EmployeeCard
        key={card.id}
        idx={idx}
        card={card}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
      />
    
    }):<Loading />}
  </>
  )
}

export default Employees;
