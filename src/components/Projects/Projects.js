import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Loading from "../LoadingAnimation/Loading"
import "./Projects.css";

function Projects({setisloggedin}) {
  const [projects, setProjects] = useState(null);
  // let URL="https://project-manager-bkend.herokuapp.com"
  let URL="http://localhost:3000"
  useEffect(() => {
    fetch(`${URL}/projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setisloggedin(true)
          setProjects(data)
        });
      } else {
        <Redirect to="/" />
      }
    });
  },[]);

  return (<>{projects !== null? projects.map((c, idx) => {
          return (<div className="card text-white bg-secondary mb-3 projectcard" key={c.name + idx}>
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <h6 className="card-title">Client name: {c.client_name}</h6>
              <p className="card-text">Cost: ${c.cost} million</p>
              <p className="card-text">Sector: {c.sector}</p>
              <p className="card-text">Start Date: {c.start_date}</p>
              <p className="card-text">End Date: {c.end_date}</p>
              <button className="btn btn-light">Edit</button>
              <button className="btn btn-outline-warning">Delete</button>
            </div>
          </div>
          )
        }): <Loading />}
    </>
  );
}

export default Projects;
