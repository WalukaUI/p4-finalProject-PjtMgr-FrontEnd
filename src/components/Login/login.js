import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import BASE_URL from "../../constraints/URL"

function Login({setUser, setisloggedin, login, setLogin }){
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
    fetch(BASE_URL + `/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setLogin(!login);
            setisloggedin(true);
            setUser(user);
          });
        } else {
          res.json().then((err) => {
            setisloggedin(false);
            setErrors(err.error);
          });
        }
      });
    }

    function canclelogin(e){
        e.preventDefault()
        history.push('/')
        setLogin(!login)
    }
    return login ? <div className="popup-box">
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
                        onClick={canclelogin}
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
              {errors ? (
                <p style={{ color: "red", marginTop: "10px" }}>{errors}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>: ""
}

export default Login