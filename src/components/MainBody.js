import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import BASE_URL from "../constraints/URL";
import PhotoCredit from "./PhotoCredit";

function MainBody() {
  const [user, setUser] = useState(null);
  const [cities, setCities] = useState([]);
  const [depts, setDepts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [countries, setCountries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activate, setActivate] = useState([]);

  window.addEventListener("popstate", () => {
    let removepname = [...activate];
    removepname.pop();
    removepname.pop();
    setActivate(removepname);
  });

  function links() {
    return activate;
  }
  // auto-login----------------

  useEffect(() => {
    fetch(BASE_URL + `/c&c/me`, {
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
    fetch(BASE_URL + `/cnc/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((r) => console.log("logged out"));
    setUser(false);
  }

  //GET Cities--------------------

  useEffect(() => {
    fetch(BASE_URL + `/cities`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCities(data);
        });
      }
    });
  }, []);

  //GET Departments--------------------

  useEffect(() => {
    fetch(BASE_URL + `/departments`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setDepts(data);
        });
      }
    });
  }, []);

  //GET countries--------------------

  useEffect(() => {
    fetch(BASE_URL + `/countries`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCountries(data);
        });
      }
    });
  }, []);

  //GET Employees--------------------

  useEffect(() => {
    fetch(BASE_URL + `/employees`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setEmployees(data);
        });
      }
    });
  }, []);

  //GET Projects--------------------

  useEffect(() => {
    fetch(BASE_URL + `/projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setProjects(data);
        });
      }
    });
  }, []);

  return (
    <div className="Login-component">
      <Router>
        <Navbar user={user} logout={logout} />
        <div className="row mainRow">
          <div className="col-md-3  mainDiv1">
            <a href="/countries" className="headderBtn">
              Business Operating Countries
            </a>
            <SideBar
              user={user}
              countries={countries}
              activate={activate}
              setActivate={setActivate}
            />
          </div>
          <div className="col-md-9 mainDiv2 bkground">
            <div className="progressbar">
              {links()}
              {activate.length !== 0 ? (
                <hr style={{ color: "red", width: "100%" }} />
              ) : (
                ""
              )}
            </div>
            <Routes>
              <Route
                path="/projects"
                element={<Projects projects={projects} />}
              ></Route>

              <Route
                path="/departments"
                element={<Departments departments={depts} />}
              ></Route>
              <Route
                path="/employees/:id"
                element={<DepartmentEmployees dept={depts} cities={cities} />}
              />
              <Route
                path="/countries/:id"
                element={
                  <CountriesCities
                    countries={countries}
                    activate={activate}
                    setActivate={setActivate}
                  />
                }
              />
              <Route
                path="/cities/:id"
                element={
                  <EmployeesOftheCity
                    depts={depts}
                    cities={cities}
                    activate={activate}
                    setActivate={setActivate}
                  />
                }
              />
              <Route
                path="/employees/:id/projects"
                element={
                  <ProjectsOfdEmployee
                    employees={employees}
                    activate={activate}
                    setActivate={setActivate}
                  />
                }
              />
              <Route
                path="/projects/:id/employees"
                element={<EmployeesOfdProject projects={projects} />}
              />
              <Route
                path="/cities"
                element={<Cities cities={cities} />}
              ></Route>
              <Route
                path="/employees"
                element={
                  <Employees
                    setEmployees={setEmployees}
                    employees={employees}
                    depts={depts}
                    cities={cities}
                  />
                }
              ></Route>
              <Route
                path="/signup"
                element={<SignUp setUser={setUser} user={user} />}
              />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/" element={<Home user={user} />}></Route>
            </Routes>
            <PhotoCredit />
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
export default MainBody;
