import React, { useEffect, useState } from "react";
import "./Departments.css";

function Departments() {
  const [departments, setDepartments] = useState([]);

  const URL = "https://project-manager-bkend.herokuapp.com";

  useEffect(() => {
    fetch(`${URL}/departments`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setDepartments(data));
  }, []);

  return (<>
        {departments.map((c, idx) => {
          return (<div class="card text-white bg-secondary mb-3 dptcard" key={c.name + idx}>
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <h6 className="card-title">Department Manager: {c.dept_manager_name}</h6>
            </div>
          </div>
          )
        })}
    </>
  );
}

export default Departments;
