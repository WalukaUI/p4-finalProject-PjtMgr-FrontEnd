import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import BASE_URL from "../../constraints/URL"

function EmployeesOftheCity(){

    const [empofCity, setEmpofCity] = useState(null);

    const params = useParams();
    useEffect(() => {

      fetch(BASE_URL + `/cities/${params.id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((r) => r.json())
        .then((data) => setEmpofCity(data.employees));
    }, [params.id]);

    return (
        <>
          <h2>Employees of the City/Branch</h2>
          {empofCity !== null ? (
            empofCity.map((emp,idx) => {
              return (
                <div key={emp.name + idx}>
                  <div
                    className="card border-secondary mb-3 dptEmpcard"
                    style={{ minWidth: "18rem" }}
                  >
                    <div className="card-header">Employee Name: {emp.name}</div>
                    <div className="card-body text-secondary">
                      <h5 className="card-title">
                        Role: {emp.role}
                      </h5>
                      <p className="card-text">Section: {emp.section? emp.section: "N/A"}</p>
                      <p className="card-text">Department: {emp.department_id}</p>
                      <div>
                      <Link to={`/employees/${emp.id}/projects`} className="btn btn-info">
                        Projects
                      </Link>
                      </div>
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

export default EmployeesOftheCity