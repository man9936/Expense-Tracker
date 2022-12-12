import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseContext from "../../Store/Expense-Context";
import ExpenseDisplay from "./ExpenseDisplay";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);

  const cntxt = useContext(ExpenseContext);
  const expensedata = useSelector((state) => state.expense.expenseData);

  useEffect(() => {
    display();
  }, []);

  const display = async () => {
    const data = await fetch(
      "https://auth-react-b1ea2com-default-rtdb.firebaseio.com/expense.json "
    );
    const value = await data.json();
    // console.log(value);
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

  return (
    <div>
      <div>Expense List</div>

      <div>
        {expensedata.map((item) => (
          <li>
            {item.amount} --- {item.description} --- {item.category}
          </li>
        ))}
        <ExpenseDisplay  data={expense} />
      </div>
      {/* </ul> */}
    </div>
  );
};

export default ExpenseList;
