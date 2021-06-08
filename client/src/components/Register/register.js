import React from "react";

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(password);
  console.log(email);
  if (email && password) {

      //need to add heroku route when deployed https://devdashboard.herokuapp.com/users
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // document.location.replace('/profile');
      console.log("Working");
    } else {
      alert(response.statusText);
    }
  }
};

function Register() {
  return (
      
    <div>
    <div className="log card text-center">
      <div className="card-body">
        <h3 className="card-title" id="signup">Signup</h3>
        <form className="form signup-form">
          <div className="form-group">
            <label htmlFor="email-signup">Email Address:</label> <br />
            <input
              type="email"
              className="form-input"
              id="email-signup"
            />
          </div>
          <div className="form form-group">
            <label htmlFor="exampleInputPassword1">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-signup"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit" onClick={signupFormHandler}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>

   
  </div>
  );
}

export default Register;
