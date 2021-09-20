import React, { useEffect, useState } from "react";
import Loading from "../LoadingAnimation/Loading";
import DepartmentCard from "./DepartmentCard"
import "./Departments.css";

function Departments({setisloggedin}) {
  const [departments, setDepartments] = useState(null);
 

 //const URL = "https://project-manager-bkend.herokuapp.com" ${URL}

  useEffect(() => {
    fetch(`/departments`, {
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
  }, []);

  //-------------------Supportive Fuctions-----------------------

 

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
