import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../LoadingAnimation/Loading";
import BASE_URL from "../../constraints/URL"

function CountriesCities({countries}) {
  const [cntyCities, setCntyCities] = useState(null);
  
  const params = useParams();
  let num=params.id
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
      <h4 style={{display: "inline-block", width: "100%", textAlign: "center"}}>Cities of {countries.map((c)=>c.id===parseInt(num)? c.name:null)}</h4>
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
                  <p className="card-text">Country: {countries.map((c)=>c.id===city.country_id? c.name:null)}</p>
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
