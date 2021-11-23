import React, { useEffect, useState } from "react";
import Loading from "../LoadingAnimation/Loading";
import "./Projects.css";
import BASE_URL from "../../constraints/URL"

function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch(BASE_URL + `/projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setProjects(data);
        });
      }
    });
  }, []);

  return (
    <>
      {projects !== null ? (
        projects.map((c, idx) => {
          return (
            <div
              className="card text-white bg-secondary mb-3 projectcard"
              key={c.name + idx}
            >
              <div className="card-header">{c.name}</div>
              <div className="card-body">
                <h6 className="card-title">Client Name: {c.client_name}</h6>
                <p className="card-text">Cost: ${c.cost} million</p>
                <p className="card-text">Sector: {c.sector}</p>
                <p className="card-text">Start Date: {c.start_date}</p>
                <p className="card-text">End Date: {c.end_date}</p>
                <button className="btn btn-light">Edit</button>
                <button className="btn btn-outline-warning">Delete</button>
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

export default Projects;
