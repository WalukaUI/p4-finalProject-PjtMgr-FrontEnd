import React, { useEffect, useState } from "react";
import Editemployee from "./EditEmployee"
import Loading from "../LoadingAnimation/Loading"
import "./Employees.css";


function Employees({setisloggedin}) {
  const [employees, setEmployees] = useState(null);
  const[display,setDisplay]=useState(false)

  // const URL = "https://project-manager-bkend.herokuapp.com";
  const URL = "http://localhost:3000";
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
           setEmployees(data)
          });
        } else {
          console.log(res);
        }
      });
      
  }, []);

  return (<>

  {employees !== null? employees.map((c, idx) => {
          return (<div className="card text-white bg-secondary mb-3 employeeCard" key={c.name + idx}>
            <Editemployee display={display} setDisplay={setDisplay} />
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <h6 className="card-title">Role: {c.role}</h6>
              <button className="btn btn-light" onClick={()=>setDisplay(!display)}>Edit</button>
              <button className="btn btn-outline-warning">Delete</button>
            </div>
          </div>
          )
        }):<Loading />}
    </>
  );
}

export default Employees;
