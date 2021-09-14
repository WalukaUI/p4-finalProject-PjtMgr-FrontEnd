import React from "react"
import {BrowserRouter as Router,Route,Redirect,Switch,} from "react-router-dom"
import "./main.css"
import Navbar from "./NavBar/Navbar"
import Footer from "./Footer/Footer"
import SideBar from "./SideBar/SideBar"
import Projects from "./Projects/Projects"

function MainBody() {
  return (
    <div className="Login-component">
      <Router>
        <Navbar />
        <div className="row mainRow">
        
            <div className="col-md-3  mainDiv1">
            <a href="!#" className="myButton">List of Countries</a>
            <SideBar />
            </div>
          <div className="col-md-9 mainDiv2">
            <Switch>
              <Route path="/projects" exact><Projects /></Route>
              <Route path="/departments" exact><Projects /></Route>
              <Route path="/cities" exact><Projects /></Route>
              <Route path="/employees" exact><Projects /></Route>
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
