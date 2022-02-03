import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
import BASE_URL from "../../constraints/URL";

function SignUp({ setUser, user }) {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});
  const [pwverification, setpwVerification] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

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
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
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

  //create new user obj

  function createNewUser(e) {
    e.preventDefault();
    let newObject = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(newObject);
  }

  return (
    <>
      {user === null ? (
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
        <div>
          <h1>{user.name}, You are signed in</h1>
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
