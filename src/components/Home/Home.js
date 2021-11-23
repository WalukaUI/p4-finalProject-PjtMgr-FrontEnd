import React from "react";
import "./Home.css";

function Home({user}) {

  return (<>
  <div className="homeDiv">
    <div className="homeCards">
       <a href="/countries">Countries
       <img src="./img/homeimg/city.jpg" alt="mgt" className="homeImage"/></a>
    </div>
    <div className="homeCards">
      <a href="/employees" >Employees
       <img src="./img/homeimg/employee.jpg" alt="mgt" className="homeImage"/></a>
    </div>
    <div className="homeCards">
      <a href="/departments">Departments
       <img src="./img/homeimg/dpt.jpg" alt="mgt" className="homeImage"/></a>
    </div>
    <div className="homeCards">
      <a href="/projects">Projects
       <img src="./img/homeimg/project.jpg" alt="mgt" className="homeImage"/></a>
    </div>
    <div className="homeCards">
      <a href="/cities">Cities
       <img src="./img/homeimg/extra.jpg" alt="mgt" className="homeImage"/></a>
    </div>
  </div>
     
    </>
  );
}

export default Home;
