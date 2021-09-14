import React, { useEffect, useState } from "react";
import "./Cities.css";

function Cities() {
  const [cities, setCities] = useState([]);

  const URL = "https://project-manager-bkend.herokuapp.com";

  useEffect(() => {
    fetch(`${URL}/cities`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setCities(data));
  }, []);

  return (<>
        {cities.map((c, idx) => {
          return (<div class="card text-white bg-secondary mb-3 citycard" key={c.name + idx}>
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <h6 className="card-title">Branch Name: {c.branch_name}</h6>
            </div>
          </div>
          )
        })}
    </>
  );
}

export default Cities;
