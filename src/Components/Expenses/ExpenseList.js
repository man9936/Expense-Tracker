import React, { useContext } from "react";
import ExpenseContext from "../../Store/Expense-Context";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = () => {
  const cntxt = useContext(ExpenseContext);
  return (
    <div>
      <div>Expense List</div>
      <ul>
        {cntxt.expense.map((item) => (
          <ExpenseListItem
            key={item.amount + item.description}
            amount={item.amount}
            description={item.description}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
