import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";

function SideBar() {
  const [country, setCountry] = useState([]);

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
        {country.map((c, idx) => {
          return (
            <div className="countryBtnDiv">
              <a href="/home" className="myButton " key={c.name + idx}>
                {c.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SideBar;
