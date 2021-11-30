import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import BASE_URL from "../../constraints/URL"

function EmployeesOfdProject({projects}){
    const [projectsofEmps, setProjectsofEmps] = useState(null);

    const params = useParams();
    useEffect(() => {
      fetch(BASE_URL + `/projects/${params.id}/employees`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((r) => r.json())
        .then((data) => setProjectsofEmps(data));
    }, [params.id]);

    return (
        <>
          <h4 style={{display: "inline-block", width: "100%", paddingBottom: "5%", textAlign: "center"}}>Employees of Project {projects.map((p)=>p.id===parseInt(params.id)?p.name:null)}</h4>
          {projectsofEmps !== null ? (
            projectsofEmps.map((emp) => {
              return (
                <div>
                  <div
                    className="card border-secondary mb-3 dptEmpcard"
                    style={{ minWidth: "18rem" }}
                  >
                    <div className="card-header">Name: {emp.name}</div>
                    <div className="card-body text-secondary">
                      <h5 className="card-title">
                        Role: {emp.role} 
                      </h5>
                      <p className="card-text">Section: {emp.section?emp.section:"N/A"}</p>
                      <div>
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

export default EmployeesOfdProject