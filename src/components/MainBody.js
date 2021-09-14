import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch,} from "react-router-dom";
import "./main.css";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";

function MainBody() {
  return (
    <div className="Login-component">
      <Router>
        <Navbar />
        <div className="row mainRow">
             <h3>List of Countries</h3>
            <div className="col-md-4  mainDiv1">
            <SideBar />
            </div>
          <div className="col-md-8 mainDiv2">
            <Switch>
              {/* <Route path="/contact" exact><Contact /></Route> */}
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
