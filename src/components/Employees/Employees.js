import React, { useEffect, useState } from "react";
import "./Employees.css";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const URL = "https://project-manager-bkend.herokuapp.com";

  useEffect(() => {
    fetch(`${URL}/employees`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setEmployees(data));
  }, []);

  return (<>
        {employees.map((c, idx) => {
          return (<div class="card text-white bg-secondary mb-3 employeeCard" key={c.name + idx}>
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <h6 className="card-title">Role: {c.role}</h6>
            </div>
          </div>
          )
        })}
    </>
  );
}

export default Employees;
