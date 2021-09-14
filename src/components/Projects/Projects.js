import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Projects.css";

function SideBar() {
  const [projects, setProjects] = useState([]);

  const URL = "https://project-manager-bkend.herokuapp.com";

  useEffect(() => {
    fetch(`${URL}/projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setProjects(data));
  }, []);

  return (<>
        {projects.map((c, idx) => {
          return (<div class="card text-white bg-secondary mb-3 citycard" key={c.name + idx}>
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <h6 className="card-title">Client name: {c.client_name}</h6>
              <p className="card-text">Cost: ${c.cost} million</p>
              <p className="card-text">Sector: {c.sector}</p>
              <p className="card-text">Start Date: {c.start_date}</p>
              <p className="card-text">End Date: {c.end_date}</p>
            </div>
          </div>
          )
        })}
    </>
  );
}

export default SideBar;
