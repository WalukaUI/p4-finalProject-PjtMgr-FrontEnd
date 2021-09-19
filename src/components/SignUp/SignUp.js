import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwverification, setpwVerification] = useState("");

  //const URL="http://localhost:3000"
  const URL = "https://project-manager-bkend.herokuapp.com";
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: username,
        password: password,
        password_confirmation: pwverification
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } 
    });
  }

  return (
    <>
      {user === null ? (
        <form onSubmit={handleSubmit} className="signupform">
          <div className="form-group">
            <h4>Register</h4>
            <label>Username</label>
            <input
              type="name"
              value={username}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Username"
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
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">
              I Agreed to terms and Conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>{user.name}, You are signed in</h1>
        </div>
      )}
    </>
  );
}

export default SignUp;
