import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import BASE_URL from "../../constraints/URL"

function CountriesCities() {
  const [cntyCities, setCntyCities] = useState(null);

  const params = useParams();
  useEffect(() => {
    fetch(BASE_URL + `/countries/${params.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => setCntyCities(data.cities));
  }, [params.id]);

  return (
    <>
      <h4 style={{display: "inline-block", width: "100%", textAlign: "center"}}>Cities of the Country</h4>
      {cntyCities !== null ? (
        cntyCities.map((city) => {
          return (
            <div>
              <div
                className="card border-secondary mb-3 dptEmpcard"
                style={{ minWidth: "18rem" }}
              >
                <div className="card-header">City Name: {city.name}</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    Branch Name: {city.branch_name}
                  </h5>
                  <p className="card-text">Country Id: {city.country_id}</p>
                  <div>
                    <Link to={`/cities/${city.id}`} className="btn btn-info">
                      Employees
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CountriesCities;
