import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import "./DepartmentEmployees.css";
import BASE_URL from "../../constraints/URL"

function DepartmentEmployees({dept,cities}) {
  const [dptEmployees, setDptEmployees] = useState(null);

  const params = useParams();
  useEffect(() => {

    fetch(BASE_URL + `/departments/${params.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => setDptEmployees(data.employees));
  }, [params.id]);

  return (
    <>
      <h2>Department {params.id} employees</h2>
      {dptEmployees !== null ? (
        dptEmployees.map((emp) => {
          return (
            <div>
              <div
                className="card border-secondary mb-3 dptEmpcard"
                style={{ minWidth: "18rem" }}
              >
                <div className="card-header">Name: {emp.name}</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">Role: {emp.role}</h5>
                  <p className="card-text">
                    Section: {emp.section ? emp.section : "N/A"}
                  </p>
                  <p className="card-text">Department: {dept.map((e)=>e.id===emp.department_id? e.name:null) }</p>
                  <p className="card-text">City: {cities.map((e)=>e.id===emp.city_id? e.name:null)}</p>
                </div>
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
export default DepartmentEmployees;
