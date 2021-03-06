import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import BASE_URL from "../../constraints/URL";
import "./Employees.css";

function ProjectsOfdEmployee({ employees, activate, setActivate }) {
  const [empsProjects, setEmpsProjects] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(BASE_URL + `/employees/${params.id}/projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => setEmpsProjects(data));
  }, [params.id]);

  //Progress bar...............................

  function setEmployeeProjectName(pname) {
    let addpname = [...activate];
    addpname.push(" ➡ ");
    addpname.push(pname);
    setActivate(addpname);
  }

  return (
    <>
      <h4
        style={{
          display: "inline-block",
          width: "100%",
          paddingBottom: "5%",
          textAlign: "center",
        }}
      >
        Projects of{" "}
        {employees.map((e) => (e.id === parseInt(params.id) ? e.name : null))}
        (Employee)
      </h4>
      {empsProjects !== null ? (
        empsProjects.map((pjt) => {
          return (
            <div>
              <div
                className="card border-secondary mb-3 dptEmpcard"
                style={{ minWidth: "18rem" }}
              >
                <div className="card-header">Project Name: {pjt.name}</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">Cost: ${pjt.cost} million</h5>
                  <p className="card-text">Sector: {pjt.sector}</p>
                  <div>
                    <Link
                      to={`/projects/${pjt.id}/employees`}
                      className="btn btn-info"
                      onClick={() => setEmployeeProjectName(pjt.name)}
                    >
                      Employees of the Project
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

export default ProjectsOfdEmployee;
