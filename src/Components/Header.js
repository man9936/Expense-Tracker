import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <Link to="/home">Home</Link>
        <Link to="expense">ExpenseTracker</Link>

        <Link to="/completeProfile">Complete Profile</Link>
        <Link to="/dailyexpense">Daily Expense</Link>
      </div>
    </nav>
  );
};

export default Header;
