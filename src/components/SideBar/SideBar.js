import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";

function SideBar({user}) {
  const [country, setCountry] = useState(null);

  //const URL = "https://project-manager-bkend.herokuapp.com";
  //const URL = "http://localhost:3000"; ${URL}

  
  useEffect(() => {
    fetch(`/countries`, {
      mode: 'no-cors',
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setCountry(data))
        }
      })
  }, []) 

  return (
    <>
      <div className="cardDiv">
        {country !== null ?   
        country.map((card, idx) => {
          return (
            <div className="countryBtnDiv myButton" key={card.name + idx}>
              <Link to={`/countries/${card.id}`}>
              <a className="countryBtn" >
                {card.name}
              </a>
              </Link>
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
