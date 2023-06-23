import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import BASE_URL from "../../constraints/URL";

function SignUp({ setUser, user }) {
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});
  const [pwverification, setpwVerification] = useState("");
  const [errors, setErrors] = useState(null);
  const [verificationNum, setVerificationNum] = useState();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [verifyemail, setVerifyemail] = useState(null);
  const [enteredValue, setEnteredValue] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(BASE_URL + `/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ...newUser,
        password: password,
        password_confirmation: pwverification,
        position: verificationNum,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setVerifyemail(user);
        });
      } else {
        res.json().then((err) => {
          setErrors(err.error);
        });
      }
    });
  }

  //create new user obj

  function createNewUser(e) {
    e.preventDefault();
    let newObject = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(newObject);
    let vNumber = Math.round(Math.random() * 100000);
    setVerificationNum(vNumber);
  }

  function compareNumber(e) {
    e.preventDefault();
    if (e.target.value === verificationNum) {
      setShowSuccessMsg(true);
      setUser(verifyemail);
    } else {
      setEnteredValue(e.target.value);
    }
  }

  return (
    <>
      {verifyemail === null ? (
        <form onSubmit={handleSubmit} className="signupform">
          <div className="form-group">
            <h4>Register</h4>
            <label>Full name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              onChange={createNewUser}
              placeholder="Enter Your Full Name"
            />
            <label>Username</label>
            <input
              type="username"
              name="username"
              className="form-control"
              onChange={createNewUser}
              placeholder="Enter a username"
            />
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={createNewUser}
              placeholder="Enter Your email address"
            />
            <small className="form-text text-muted">
              We'll never share your informations with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              autocomplete="on"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label>Password Verification</label>
            <input
              type="password"
              value={pwverification}
              autocomplete="on"
              className="form-control"
              onChange={(e) => setpwVerification(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div style={{ textAlign: "center" }}>
          {showSuccessMsg ? (
            ""
          ) : (
            <div>
              <h3>Please Verify Your email address</h3>
              <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </div>
          )}
          {showSuccessMsg ? (
            <h4>Successfuly Verified, Thank you </h4>
          ) : (
            <div>
              <p>
                <span style={{ color: "red" }}>{enteredValue}</span>, Wrong
                verification number.
              </p>
              <p>
                Please cheack your emails and enter verification number below
              </p>
            </div>
          )}
          {showSuccessMsg ? (
            <Link to="/">Go to Homepage</Link>
          ) : (
            <input name="verification" onChange={compareNumber} />
          )}
        </div>
      )}
      {/* <div>
        {errors
          ? errors?.map((e) => (
              <p style={{ color: "red", marginTop: "10px" }}>{e}</p>
            ))
          : null}
      </div> */}
      <p style={{ color: "red", marginTop: "10px" }}>{errors}</p>
    </>
  );
}

export default SignUp;
