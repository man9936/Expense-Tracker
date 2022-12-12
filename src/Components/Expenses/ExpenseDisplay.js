import React, { useEffect } from "react";
import classes from "./ExpenseDisplay.module.css";

const ExpenseDisplay = (props) => {
  console.log(props);

  const display = props.data.map((item) => (
    <div>
      <li>
        {item.amount} --- {item.category} --- {item.description}
          <span>
            <button>Edit</button>
          </span>
          <span>
            -
          </span>
          <span>
            <button>Del</button>
          </span>
      </li>
    </div>
  ));
  return <div className={classes.arrange}>{display}</div>;
};

export default ExpenseDisplay;
