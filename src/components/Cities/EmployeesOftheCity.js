import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import BASE_URL from "../../constraints/URL"

function EmployeesOftheCity({depts, cities}){

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
          <h4 style={{display: "inline-block", width: "100%", paddingBottom: "5%", textAlign: "center"}}>
            Employees of the {cities.map((c)=>c.id==params.id? c.name:null)}(City)</h4>
          {empofCity !== null ? (
            empofCity.map((emp,idx) => {
              return (
                <div key={emp.name + idx}>
                  <div
                    className="card border-secondary mb-3 dptEmpcard"
                    style={{ minWidth: "18rem", backgroundColor: "#D6FBF5" , opacity: "0.95"}}
                  >
                    <div className="card-header">Employee Name: {emp.name}</div>
                    <div className="card-body text-secondary">
                      <h5 className="card-title">
                        Role: {emp.role}
                      </h5>
                      <p className="card-text">Section: {emp.section? emp.section: "N/A"}</p>
                      <p className="card-text">Department: {depts.map((d)=>d.id===emp.department_id? d.name:null)}</p>
                      <div>
                      <Link to={`/employees/${emp.id}/projects`} className="btn btn-info">
                        Employee's Projects
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