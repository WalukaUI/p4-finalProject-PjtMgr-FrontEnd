import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";



function Nav2({ logout, isloggedin, setLoginState}) {

   const history = useHistory();

  function handlelogout(e) {
    e.preventDefault();
    logout();
    localStorage.clear();
    history.push("/");
  }

  function setloginwindow(e){
    e.preventDefault();
    history.push("/login");
    setLoginState()
  }

  return <><div className="navDiv">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="black"
          variant="dark"
          className="navbar2"
        >
          <Container>
            <div>
              <Navbar.Brand href="/" className="org_name">
                <img
                  src="../img/logo.jpg"
                  alt="SLA Logo"
                  className="logoImageNav2"
                />
                T&T.Inc Project Mgt. Sys
              </Navbar.Brand>
            </div>

            <div className="navCollaps">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  <Nav.Link href="/departments">Departments</Nav.Link>
                  <Nav.Link href="/cities">Cities</Nav.Link>
                  <Nav.Link href="/employees">Employees</Nav.Link>
                </Nav>
                {isloggedin !== true ? (
                  <Nav.Link href="/Login">
                    <button className="btn btn-warning" onClick={setloginwindow} href="/login">
                    Log in
                    </button>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/">
                    <button className="btn btn-warning" onClick={handlelogout}>
                      Log Out
                    </button>
                  </Nav.Link>
                )}

                {isloggedin !== true ? (
                  <Nav.Link href="/Signup">
                    <button className="btn btn-warning" href="/signup">
                      Sign up
                    </button>
                  </Nav.Link>
                ) : null}
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
}

export default Nav2;
