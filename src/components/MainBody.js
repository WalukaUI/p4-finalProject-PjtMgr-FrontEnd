import React from "react";
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

function MainBody() {
  return (
    <div className="Login-component">
      <Router>
        <Navbar />
        <div className="row mainRow">
          <div className="col-md-3  mainDiv1">
            <a href="/countries" className="headderBtn">
              Business Operating Countries
            </a>
              <SideBar />
          </div>
          <div className="col-md-9 mainDiv2">
            <Switch>
              <Route path="/projects" exact>
              <div className="hedderdiv"><h5>All Projects of the Company</h5></div>
                <Projects />
              </Route>
              <Route path="/departments" exact>
                <div className="hedderdiv"><h5>Departments of the Company</h5></div>
                <Departments />
              </Route>
              <Route path="/cities" exact>
              <div className="hedderdiv"><h5>Business Opearting Cities of the Company</h5></div>
                <Cities />
              </Route>
              <Route path="/employees" exact>
              <div className="hedderdiv"><h5>All Employees of the Company</h5></div>
                <Employees />
              </Route>
              <Route path="/" exact>
              <div className="hedderdiv"><h5>Welcome to T&T Project Manager</h5></div>
                <Home />
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
