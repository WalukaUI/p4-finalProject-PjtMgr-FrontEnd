import { Nav, Navbar, Container } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Nav2({ setUser, logout ,isloggedin, setisloggedin}) {
  const [login, setLogin] = useState(false);
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors]=useState(null)


  function handleSubmit(e) {
    e.preventDefault();

  //   //login

    //const URL = "https://project-manager-bkend.herokuapp.com";
    // const URL = "http://localhost:3000";
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        password: password,
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setLogin(!login);
          setisloggedin(true)
          setUser(user)
          
        });
      } else {
        res.json().then((err) => {
          setisloggedin(false)
          setErrors(err.error);
        });
      }
    });
  }

  function handlelogout(e) {
    e.preventDefault();
    logout();
  }
  function setLoginState(e) {
    e.preventDefault();
    setLogin(!login);
  }


  return login ? (
    <>
      <div className="popup-box">
        <div className="popup-inner">
          <div className="formDiv div1">
            <form onSubmit={handleSubmit}>
              <h4>Log In</h4>
              <div className="form-group row">
                <label>
                  Username
                  <input
                    name="product_name"
                    value={name}
                    className="form-control form-control-sm"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <label>
                  Password
                  <input
                    name="product_price"
                    value={password}
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <button
                        className=" btn btn-success loginFormBtns"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                    <div className="col-sm">
                      <button
                        className="btn btn-danger loginFormBtns"
                        onClick={(e) => setLogin(!login)}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-sm"></div>
                  </div>
                </div>
              </div>
            </form>
            <div>
              {errors? <p style={{color:"red", marginTop:"10px"}}>{errors}</p> :null}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="navDiv">
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
                 {isloggedin !== true ?
                                <Nav.Link href="/Login">
                                <button className="btn btn-warning" onClick={setLoginState}>
                                 Log in
                                </button>
                              </Nav.Link>:
                              <Nav.Link href="/">
                              <button className="btn btn-warning" onClick={handlelogout}>
                               Log Out
                              </button>
                            </Nav.Link>
              } 

              {isloggedin !== true ? 
                <Nav.Link href="/Signup">
                  <button className="btn btn-warning" href="/signup">
                    Sign up
                  </button>
                </Nav.Link>: null}
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Nav2;
