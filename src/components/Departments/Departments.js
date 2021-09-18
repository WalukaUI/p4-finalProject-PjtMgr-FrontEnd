import React, { useEffect, useState } from "react";
import Loading from "../LoadingAnimation/Loading";
import "./Departments.css";

function Departments({setisloggedin}) {
  const [departments, setDepartments] = useState(null);

  // const URL = "https://project-manager-bkend.herokuapp.com";
  const URL = "http://localhost:3000";

  useEffect(() => {
    fetch(`${URL}/departments`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setisloggedin(true)
          setDepartments(data)
        });
      } else {
        console.log(res);
      }
    });
  }, []);

  return (
    <>
      {departments !== null ? (
        departments.map((c, idx) => {
          return (
            <div
              className="card text-white bg-secondary mb-3 dptcard"
              key={c.name + idx}
            >
              <div className="card-header">{c.name}</div>
              <div className="card-body">
                <h6 className="card-title">
                  Department Manager: {c.dept_manager_name}
                </h6>
                <button className="btn btn-light">Edit</button>
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Departments;
