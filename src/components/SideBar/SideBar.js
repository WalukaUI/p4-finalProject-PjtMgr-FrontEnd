import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";

function SideBar() {
  const [country, setCountry] = useState(null);

  const URL = "https://project-manager-bkend.herokuapp.com";

  useEffect(() => {
    fetch(`${URL}/countries`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <>
      <div className="cardDiv">
        {country !== null ?   
        country.map((c, idx) => {
          return (
            <div className="countryBtnDiv" key={c.name + idx}>
              <a href="/home" className="myButton " >
                {c.name}
              </a>
            </div>
          );
        })
        :<div className="d-flex justify-content-center mt-5 mb-5">
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="row text-center" >
          <h3>   Loading...</h3>
        </div>
      </div>}
        
      </div>
    </>
  );
}

export default SideBar;
