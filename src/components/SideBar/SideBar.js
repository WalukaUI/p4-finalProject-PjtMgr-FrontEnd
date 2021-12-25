import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";

function SideBar({ user, countries, activate, setActivate }) {
  //Add active class to buttons-----------------

  function cahngeColor(e) {
    setActivate(e);
  }

  return (
    <>
      <div className="cardDiv">
        {countries.length > 0 ? (
          countries.map((card, idx) => {
            return (
              <div className="countryBtnDiv myButton" key={card.name + idx}>
                {user ? (
                  <Link
                    to={`/countries/${card.id}`}
                    className={
                      activate === card.name
                        ? "countryBtn active"
                        : "countryBtn"
                    }
                    onClick={() => cahngeColor(card.name)}
                  >
                    {card.name}
                  </Link>
                ) : (
                  <a href="/login" className="countryBtn">
                    {card.name}
                  </a>
                )}
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
