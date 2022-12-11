import React from "react";

const Header = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="expense">ExpenseTracker</Link>
      <Link to="/completeProfile">Complete Profile</Link>
    </div>
  );
};

export default Header;
