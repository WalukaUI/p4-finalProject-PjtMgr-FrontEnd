import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./main.css";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";
import Projects from "./Projects/Projects";
import Departments from "./Departments/Departments";
import Cities from "./Cities/Cities";
import Employees from "./Employees/Employees";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/login";
import DepartmentEmployees from "./Departments/DepartmentEmployees";
import CountriesCities from "./SideBar/CountriesCities";
import EmployeesOftheCity from "./Cities/EmployeesOftheCity";
import ProjectsOfdEmployee from "./Employees/EmployeeProjects";
import EmployeesOfdProject from "./Projects/EmployeesOfdProject";
import BASE_URL from "../constraints/URL"

function MainBody() {
  const [user, setUser] = useState(null);

  // auto-login----------------

  useEffect(() => {
    fetch(BASE_URL + `/me`,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  // logout //${URL}-------------

  function logout() {
    fetch(BASE_URL + `/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((r) => console.log("logged out"));
    setUser(false)
  }

  return (
    <div className="Login-component">
      <Router>
        <Navbar
          user={user}
          logout={logout}    
        />
        <div className="row mainRow">
          <div className="col-md-3  mainDiv1">
           

            <a href="/countries" className="headderBtn">
              Business Operating Countries
            </a>
            <SideBar user={user} />

          </div>
          <div className="col-md-9 mainDiv2">
            <Switch>
              <Route path="/projects" exact>
                <div className="hedderdiv">
                  <h5>All Projects of the Company</h5>
                </div>
                <Projects />
              </Route>

              <Route path="/departments" exact>
                <div className="hedderdiv">
                  <h5>Departments of the Company</h5>
                </div>
                <Departments />
              </Route>
              <Route path="/employees/:id" exact>
                <DepartmentEmployees />
              </Route>
              <Route path="/countries/:id" exact>
                <CountriesCities />
              </Route>
              <Route path="/cities/:id" exact>
                <EmployeesOftheCity />
              </Route>
              <Route path="/employees/:id/projects" exact>
                <ProjectsOfdEmployee />
              </Route>
              <Route path="/projects/:id/employees" exact>
                <EmployeesOfdProject />
              </Route>
              <Route path="/cities" exact>
                <div className="hedderdiv">
                  <h5>Business Opearting Cities of the Company</h5>
                </div>
                <Cities/>
              </Route>
              <Route path="/employees" exact>
                <div className="hedderdiv">
                  <h5>All Employees of the Company</h5>
                </div>
                <Employees />
              </Route>
              <Route path="/signup" exact>
                <SignUp
                  setUser={setUser}
                  user={user}
                />
              </Route>
              <Route path="/login" exact>
                <Login
                  setUser={setUser}
         
                />
              </Route>
              <Route path="/" exact>
                <div className="hedderdiv">
                  <h5>Welcome to T&T Project Manager</h5>
                </div>
                <Home user={user}/>
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default MainBody;
