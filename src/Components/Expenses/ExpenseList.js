import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../../Store/Expense-Context";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);

  const cntxt = useContext(ExpenseContext);

  useEffect(() => {
    display();
  }, []);

  const display = async () => {
    const data = await fetch(
      "https://auth-react-b1ea2-default-rtdb.firebaseio.com/expense.json "
    );
    const value = await data.json();
    console.log(value);
    cntxt.addExpense(value);
    const array = [];
    for (const key in value) {
      array.push({
        amount: value[key].amount,
        description: value[key].description,
        category: value[key].category,
      });
    }
    setExpense(array);
  };
  console.log(expense);

  return (
    <div>
      <div>Expense List</div>
      <ul>
        {expense.map((item) => (
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
