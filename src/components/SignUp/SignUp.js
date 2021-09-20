import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";

function SignUp({ setUser, user, setisloggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwverification, setpwVerification] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: username,
        password: password,
        password_confirmation: pwverification,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setisloggedin(true);
          setUser(user);
          history.push("/");
        });
      } else {
        res.json().then((err) => {
          setErrors(err.error);
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>{user.name}, You are signed in</h1>
        </div>
      )}
      <div>
        {errors
          ? errors.map((e) => (
              <p style={{ color: "red", marginTop: "10px" }}>{e}</p>
            ))
          : null}
      </div>
    </>
  );
}

export default SignUp;
