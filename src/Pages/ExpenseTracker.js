import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Logout from "../Components/Logout";

const ExpenseTracker = () => {
  const totalAmount= useSelector(state=>state.expense.totalAmount)
  const history = useHistory();
  const profileCompleteHandler = () => {
    history.push("/completeProfile");
  };

  const id = localStorage.getItem("token");

  const verifyIdHandler = () => {
    history.replace('/verifyemail')
     };

  const dailyExpenseHandler = () => {
    history.replace("/dailyexpense");
  };
  return (
    <div>
      <div>
        <Logout />
      </div>
      <h1>Welcome To Expense Tracker</h1>

      <p>Your Profile is incomplete</p>
      <button onClick={profileCompleteHandler} class="btnn">complete now</button>
      <button onClick={verifyIdHandler} class="btnn">Verify Your Email-Id</button>
      <button onClick={dailyExpenseHandler} class="btnn"> Add Daily Expenses</button>
      {totalAmount>10000 && <button>Premium</button>}
    </div>
  );
};

export default ExpenseTracker;
