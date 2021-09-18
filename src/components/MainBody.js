import React, { useState,  useEffect } from "react";
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


function MainBody() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login //
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function  logout(){
      // logout-logout //
      fetch("http://localhost:3000/logout", {
      method: "DELETE"
    }).then((r) => console.log(r));
  }
  
  return (
    <div className="Login-component">
      <Router>
        <Navbar setUser={setUser} user={user} logout={logout}/>
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
              <Route path="/signup" exact>
                <SignUp setUser={setUser} user={user}/>
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
