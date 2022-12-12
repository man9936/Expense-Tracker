import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import ExpenseShow from "./Components/Expenses/ExpenseShow";
import AuthForm from "./Pages/AuthForm";
import CompleteProfile from "./Pages/CompleteProfile";
import ExpenseTracker from "./Pages/ExpenseTracker";
import ForgetPassword from "./Pages/ForgetPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import AuthContext from "./Store/Auth-Context";

function App() {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Switch>
        <Route path="/authform">
          <AuthForm />
        </Route>

        {isLoggedIn && (
          <Route path="/expense" exact>
            <ExpenseTracker />
          </Route>
        )}
        <Route path="/completeProfile" exact>
          <CompleteProfile />
        </Route>
        <Route path="/forgetpassword" exact>
          <ForgetPassword />
        </Route>
        {isLoggedIn && (
          <Route path="/dailyexpense" exact>
            <ExpenseShow />
          </Route>
        )}
        <Route path="/verifyemail" exact>
          <VerifyEmail />
        </Route>
        <Route path="*">
          <Redirect to="/authform">
            <AuthForm />
          </Redirect>
        </Route>
      </Switch>
    </>
  );
}

export default App;
