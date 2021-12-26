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
import BASE_URL from "../constraints/URL";

function MainBody() {
  const [user, setUser] = useState(null);
  const [cities, setCities] = useState([]);
  const [depts, setDepts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [countries, setCountries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activate, setActivate] = useState([]);
  // const history = useHistory();

  // window.addEventListener("popstate", () => {
  //   if (history.action === "POP") {
  //     alert("POP");
  //   } else if (history.action === "PUSH") {
  //     alert("Push");
  //   }
  //   // let removepname = [...activate];
  //   // removepname.pop();
  //   // removepname.pop();
  //   // setActivate(removepname);
  // });

  function links() {
    return activate;
  }
  // auto-login----------------

  useEffect(() => {
    fetch(BASE_URL + `/me`, {
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
            <Switch>
              <Route path="/projects" exact>
                <div className="hedderdiv">
                  <h5>All Projects of the Company</h5>
                </div>
                <Projects projects={projects} />
              </Route>

              <Route path="/departments" exact>
                <div className="hedderdiv">
                  <h5>Departments of the Company</h5>
                </div>
                <Departments departments={depts} />
              </Route>
              <Route path="/employees/:id" exact>
                <DepartmentEmployees dept={depts} cities={cities} />
              </Route>
              <Route path="/countries/:id" exact>
                <CountriesCities
                  countries={countries}
                  activate={activate}
                  setActivate={setActivate}
                />
              </Route>
              <Route path="/cities/:id" exact>
                <EmployeesOftheCity
                  depts={depts}
                  cities={cities}
                  activate={activate}
                  setActivate={setActivate}
                />
              </Route>
              <Route path="/employees/:id/projects" exact>
                <ProjectsOfdEmployee
                  employees={employees}
                  activate={activate}
                  setActivate={setActivate}
                />
              </Route>
              <Route path="/projects/:id/employees" exact>
                <EmployeesOfdProject projects={projects} />
              </Route>
              <Route path="/cities" exact>
                <div className="hedderdiv">
                  <h5>Business Opearting Cities of the Company</h5>
                </div>
                <Cities cities={cities} />
              </Route>
              <Route path="/employees" exact>
                <div className="hedderdiv">
                  <h5 style={{ color: "white" }}>
                    All Employees of the Company
                  </h5>
                </div>
                <Employees
                  setEmployees={setEmployees}
                  employees={employees}
                  depts={depts}
                  cities={cities}
                />
              </Route>
              <Route path="/signup" exact>
                <SignUp setUser={setUser} user={user} />
              </Route>
              <Route path="/login" exact>
                <Login setUser={setUser} />
              </Route>
              <Route path="/" exact>
                <div className="hedderdiv">
                  <h5>Welcome to T&T Project Manager</h5>
                </div>
                <Home user={user} />
              </Route>
              <Redirect to="/" />
            </Switch>
            <small style={{ width: "100%", fontSize: "0.5rem" }}>
              Photo by{" "}
              <a href="https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                NordWood Themes
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/business?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </small>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default MainBody;
