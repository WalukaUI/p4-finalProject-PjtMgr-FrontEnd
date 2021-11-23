import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";



function Nav2({ user, logout}) {

  const history = useHistory();

  function handlelogout(e) {
    e.preventDefault();
    logout();
    localStorage.clear();
    history.push("/");
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
                  <Nav.Link href={user ?"/projects": "/login"}>Projects</Nav.Link>
                  <Nav.Link href={user ?"/departments": "/login"}>Departments</Nav.Link>
                  <Nav.Link href={user ?"/cities": "/login"}>Cities</Nav.Link>
                  <Nav.Link href={user ?"/employees": "/login"}>Employees</Nav.Link>
                  
                </Nav>
                {user?<button className="btn btn-light"  style={{cursor: "auto"}} href="/login">
                    You are Logged in as "{user.name}"
                    </button>:"" }
                {!user ? (
                  <Nav.Link href="/Login">
                    <button className="btn btn-warning"  href="/login">
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

                {!user ? (
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
