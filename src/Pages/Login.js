import React, { useRef } from "react";
import classes from "./Login.css";

const Login = () => {
  let emailidInputref = useRef("");
  let passwordInputRef = useRef("");
  let confirmPaswordInputRef = useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submit");

    const enteredEmail = emailidInputref.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPaswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          confirmPassword: enteredConfirmPassword,
          returnSecureToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log(enteredEmail, "succesfully signed up");
          return resp.json();
        } else {
          resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then(() => {});
  };
  return (
    <div className="form">
      <form onSubmit={onSubmitHandler}>
        <div className="title"> Sign Up </div>
        <div className="input-container ic1">
          <input
            id="Email-Id"
            type="text"
            className="input"
            required
            ref={emailidInputref}
          />
          <div className="cut"></div>
          <label className="placeholder">Email-Id</label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            ref={passwordInputRef}
            required
          />
          <div className="cut"></div>
          <label className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
          <input
            id="confirmPassword"
            className="input"
            type="password"
            ref={confirmPaswordInputRef}
            required
          />
          <div className="cut"></div>
          <label className="placeholder">Confirm Password</label>
        </div>
        <button type="text" className="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
