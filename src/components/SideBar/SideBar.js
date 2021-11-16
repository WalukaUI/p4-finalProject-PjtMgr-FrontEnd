import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";
import BASE_URL from "../../constraints/URL"

function SideBar({ user }) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    fetch(BASE_URL + `/countries`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setCountry(data));
      }
    });
  }, []);

  return (
    <>
      <div className="cardDiv">
        {country !== null ? (
          country.map((card, idx) => {
            return (
              <div className="countryBtnDiv myButton" key={card.name + idx}>
                {user ? <Link to={`/countries/${card.id}`} className="countryBtn">
                  {card.name}
                </Link>: <Link to="/Login" className="countryBtn">
                  {card.name}
                </Link>}
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only"></span>
            </div>
            <div className="row text-center">
              <h3> Loading...</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SideBar;
