import React from "react";
import "./Home.css";
import PageHeading from "../PageHeadings";

function Home({ user }) {
  return (
    <>
      <PageHeading heading={"Welcome to T&T Project Manager"} />
      <div className="homeDiv">
        <div className="homeCards">
          <a href={user ? "/countries" : "/login"}>
            Countries
            <img src="./img/homeimg/city.jpg" alt="mgt" className="homeImage" />
          </a>
        </div>
        <div className="homeCards">
          <a href={user ? "/employees" : "/login"}>
            Employees
            <img
              src="./img/homeimg/employee.jpg"
              alt="mgt"
              className="homeImage"
            />
          </a>
        </div>
        <div className="homeCards">
          <a href={user ? "/departments" : "/login"}>
            Departments
            <img src="./img/homeimg/dpt.jpg" alt="mgt" className="homeImage" />
          </a>
        </div>
        <div className="homeCards">
          <a href={user ? "/projects" : "/login"}>
            Projects
            <img
              src="./img/homeimg/project.jpg"
              alt="mgt"
              className="homeImage"
            />
          </a>
        </div>
        <div className="homeCards">
          <a href={user ? "/cities" : "/login"}>
            Cities
            <img
              src="./img/homeimg/extra.jpg"
              alt="mgt"
              className="homeImage"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
