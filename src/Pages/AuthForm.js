import React, { useContext, useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
// import Login from "./Login";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //   const history = useHistory();

  const authCntxt = useContext(AuthContext);

  let emailidInputref = useRef("");
  let passwordInputRef = useRef("");
  let confirmPaswordInputRef = useRef("");

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailidInputref.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPaswordInputRef.current.value;

    setIsLoading(true);
    if (!isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => {
          if (resp.ok) {
            console.log(enteredEmail, "succesfully signed up");
            return resp.json();
          } else {
            resp.json().then((data) => {
              // console.log(data);
            });
          }
        })
        .then((data) => {
          console.log(data);
          authCntxt.login(data.idToken);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => {
          if (resp.ok) {
            console.log(enteredEmail, "succesfully login up");
            return resp.json();
          } else {
            resp.json().then((data) => {
              console.log(data);
              //   history.replace("/ExpenseTracker");
            });
          }
        })
        .then((data) => {
          console.log(data);
          authCntxt.login(data.idToken);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <section>
      <div className="form">
        <form onSubmit={onSubmitHandler}>
          <div className="title"> {isLogin ? "Login" : "SignUp"}</div>
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
          {!isLogin && (
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
          )}
          <div className="actions">
            {!isLoading && isLogin && <button> Login</button>}
            {!isLoading && !isLogin && <button> Create Account</button>}

            {isLoading && <p>Sending request....</p>}
            <button
              type="button"
              className="toggle"
              onClick={switchAuthHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
