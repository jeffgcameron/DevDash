import React from "react";
import Questions from "../Profile-Questions/requiredQs";
import Languages from "../Profile-Questions/languages";
import BioAndGoals from "../Profile-Questions/multilineQs";
import Strengths from "../Profile-Questions/strengths";
import Weaknesses from "../Profile-Questions/weaknesses";
import { Link } from "react-router-dom";
import "./style.css";

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const bio = document.querySelector("#bio-signup").value.trim();
  const goals = document.querySelector("#goals-signup").value.trim();
  const firstName = document.querySelector("#firstname-signup").value.trim();
  const lastName = document.querySelector("#lastname-signup").value.trim();
  const strengths = document.querySelector("#strength-signup").textContent;
  const weaknesses = document.querySelector("#weakness-signup").textContent;
  const languages = document.querySelector("#languages-signup").textContent;
  const name = lastName + " " + firstName;
  const github = document.querySelector("#github").value.trim();

  const fail = document.querySelector(".fail")

  if (
    name &&
    email &&
    password &&
    github &&
    bio &&
    goals &&
    strengths &&
    weaknesses &&
    languages
  ) {
    //need to add heroku route when deployed https://devdashboard.herokuapp.com/users
    //need to add heroku route when deployed http://localhost:3001/users
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        github,
        password,
        bio,
        goals,
        strengths,
        weaknesses,
        languages,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/user");
      console.log(bio);
      console.log(languages);
      console.log(firstName);
      console.log(lastName);
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(goals);
      console.log(github);
      console.log("Working");
    } 
  } else {
    fail.textContent ="Please fill out all fields to create your account.";
  }
};

function Register() {
  return (
    <div className="d-flex justify-content-center">
      <div className="log card text-center" >
        <div className="card-body">
          <h3 className="card-title" id="signup">
            Signup
          </h3>
          <form className="form signup-form">
            <div className="form form-group">
              <Questions />
            </div>
            <div className="form form-group">
              <label htmlFor="exampleInputPassword1"></label>
              <BioAndGoals />
            </div>
            <div className="form form-group">
              <label htmlFor="exampleInputLanguage"></label>
              <Languages  className="form-input" type="checkbox" />
            </div>
           
            <div className="form form-group">
              <label htmlFor="exampleInputLanguage"></label>
              <Strengths  className="form-input" type="checkbox" />
            </div>
            <div className="form form-group">
              <label htmlFor="exampleInputWeakness"></label>
              <Weaknesses  className="form-input" type="checkbox" />
            </div>

            <div className="button-group form-group">
              <button
                className=" btn btn-primary"
                type="submit"
                onClick={signupFormHandler}
              >
                Signup
              </button>
            </div>

            <div className="login">
              <Link
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/login"
              >
                Already have an account? Login here!
              </Link>
            </div>
            <p className="fail"></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
