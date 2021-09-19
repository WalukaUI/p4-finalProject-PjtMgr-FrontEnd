import React, { useEffect, useState } from "react";
import Loading from "../LoadingAnimation/Loading";
import "./Cities.css";

function Cities({setisloggedin}) {
  const [cities, setCities] = useState(null);
   const URL = "https://project-manager-bkend.herokuapp.com";
  //let URL="http://localhost:3000"
  useEffect(() => {
    fetch(`${URL}/cities`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setisloggedin(true)
          setCities(data)
        });
      } 
    });
  },[]);

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
