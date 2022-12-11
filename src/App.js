import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgetPassword from "./Pages/ForgetPassword";

import AuthForm from "./Pages/AuthForm";
import CompleteProfile from "./Pages/CompleteProfile";
import ExpenseTracker from "./Pages/ExpenseTracker";
import AuthContext from "./Store/Auth-Context";

import Header from "./Components/Header";
import ExpenseShow from "./Components/Expenses/ExpenseShow";

export default function App() {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;
  return (
    <React.Fragment>
      <Switch>
        <Route path="/authform">
          <AuthForm />
        </Route>
        <Route path="/dailyexpense" exact>
          {isLoggedIn ? <ExpenseShow /> : <Redirect to="/authform" />}
        </Route>
        <Route path="/home">
          <Headers />
        </Route>
        <Route path="/forgetpassword" exact>
          <ForgetPassword />
        </Route>

        {isLoggedIn && (
          <Route path="/expense" exact>
            <Header />
            <ExpenseTracker />
          </Route>
        )}
        <Route path="/completeProfile" exact>
          <CompleteProfile />
        </Route>
        <Route path="*">
          <Redirect to="/authform" />
          <AuthForm />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
