import React, { useEffect, useState } from "react";
import Loading from "../LoadingAnimation/Loading";
import DepartmentCard from "./DepartmentCard"
import "./Departments.css";
import BASE_URL from "../../constraints/URL"

function Departments({setisloggedin}) {
  const [departments, setDepartments] = useState(null);
 


  useEffect(() => {
    fetch(BASE_URL + `/departments`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setisloggedin(true)
          setDepartments(data)
        });
      }
    });
  }, [setisloggedin]);


  return (
    <>

      {departments !== null ? (
        departments.map((card, idx) => {
          return (
            <DepartmentCard 
             key={card.name + idx}
             card={card}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Departments;
