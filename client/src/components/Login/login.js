import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const fail = document.querySelector("#fail")
  console.log(password);
  console.log(email);
  if (email && password) {
    // Send a POST request to the API endpoint

    //need to add heroku route when deployed https://devdashboard.herokuapp.com/users/login
    //need to add heroku route when deployed http://localhost:3001/users/login
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/user");
      console.log(response);
    } else {
      fail.textContent = "Incorrect email or password. Please try again."
    }
  }
};


function Login() {
  return (
    <div className="d-flex justify-content-center">
      <div className="log card text-center">
        <div className="card-body">
          <h3 className="card-title" id="login">
            Login
          </h3>
          <form className="form login-form" label="email">
            <div className="form-group">
              <label htmlFor="email-login">Email Address:</label> <br />
              <input type="email" className="form-input" id="email-login" />
            </div>
            <div className="form form-group">
              <label htmlFor="exampleInputPassword1">Password:</label>
              <br />
              <input
                className="form-input"
                type="password"
                id="password-login"
              />
            </div>
            <div className="button-group form-group">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={loginFormHandler}
              >
                Login
              </button>
            </div>
            <div className="register">
              <Link
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                Dont have an account? Register here!
              </Link>
            </div>
            <p id="fail"></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
