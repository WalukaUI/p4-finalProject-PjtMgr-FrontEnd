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
import DepartmentEmployees from "./Departments/DepartmentEmployees"


function MainBody() {
  
  const [user, setUser] = useState(null);
  const [isloggedin, setisloggedin] = useState(null);

  const URL = "https://project-manager-bkend.herokuapp.com";
  //const URL="http://localhost:3000"
  // auto-login // ${URL}
  useEffect(() => {
    fetch(`${URL}/me`).then((r) => {
      if (r.ok) {
        
        r.json().then((user) =>{ 
          setisloggedin(true)
          setUser(user)});
      }
    });
  }, []);

   // logout //
  function  logout(){
      fetch(`${URL}/logout`, {
      method: "DELETE",
      credentials: "include"
    }).then((r) => console.log("logged out"));
    setisloggedin(false)
  }

  
  return (
    <div className="Login-component">
      <Router>
        <Navbar setUser={setUser} 
        logout={logout} 
        isloggedin={isloggedin} 
        setisloggedin={setisloggedin} 
        />
        <div className="row mainRow">
          <div className="col-md-3  mainDiv1">
            <a href="/countries" className="headderBtn">
              Business Operating Countries
            </a>
              <SideBar user={user} setisloggedin={setisloggedin}/>
          </div>
          <div className="col-md-9 mainDiv2">
            <Switch>
        
              <Route path="/projects" exact>
              <div className="hedderdiv"><h5>All Projects of the Company</h5></div>
                <Projects setisloggedin={setisloggedin}/>
              </Route>
       
              <Route path="/departments" exact>
                <div className="hedderdiv"><h5>Departments of the Company</h5></div>
                <Departments setisloggedin={setisloggedin}/>
              </Route>
              <Route path="/employees/:id" exact>
                <DepartmentEmployees />
              </Route>
              <Route path="/cities" exact>
              <div className="hedderdiv"><h5>Business Opearting Cities of the Company</h5></div>
                <Cities setisloggedin={setisloggedin}/>
              </Route>
              <Route path="/employees" exact>
              <div className="hedderdiv"><h5>All Employees of the Company</h5></div>
                <Employees setisloggedin={setisloggedin}/>
              </Route>
              <Route path="/signup" exact>
                <SignUp setUser={setUser} user={user} setisloggedin={setisloggedin}/>
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
