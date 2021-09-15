import React, { useEffect, useState } from "react";
import Loading from "../LoadingAnimation/Loading";
import "./Cities.css";

function Cities() {
  const [cities, setCities] = useState(null);
  let URL="https://project-manager-bkend.herokuapp.com"
  useEffect(() => {
    fetch(`${URL}/cities`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setCities(data));
  });

  return (<> {cities !== null ? 
    cities.map((c, idx) => {
      return (<div className="card text-white bg-secondary mb-3 citycard" key={c.name + idx}>
        <div className="card-header">{c.name}</div>
        <div className="card-body">
          <h6 className="card-title">Branch Name: {c.branch_name}</h6>
        </div>
      </div>
      )
    })
  : <Loading />}</>);
}

export default Cities;
