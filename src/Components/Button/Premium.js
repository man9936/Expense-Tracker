import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Premium = () => {
  const [theme, setTheme] = useState("light-theme");

  const totalAmount = useSelector((state) => state.expense.totalAmount);
  const themeChangeHandler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      console.log("dark");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      {totalAmount > 2000 && (
        <button onClick={themeChangeHandler} className="btn">
          Activate Premium
        </button>
      )}
    </div>
  );
};

export default Premium;
