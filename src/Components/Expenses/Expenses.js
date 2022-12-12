import React, { useContext, useRef } from "react";
import "./Expense.css";
import ExpenseContext from "../../Store/Expense-Context";
import { useDispatch } from "react-redux";
import { expenseAction } from "../../Store/ExpenseSlice";

const Expenses = () => {
  const contxt = useContext(ExpenseContext);
  const dispatch = useDispatch();

  let amountInputRef = useRef();
  let descInputRef = useRef();
  let listInputRef = useRef();

  const submitExpenseHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;
    const desc = descInputRef.current.value;
    const list = listInputRef.current.value;

    const totalamount = +amount;

    const data = {
      amount: amount,
      description: desc,
      category: list,
    };
    // const totalamount=+amount;
    fetch(
      "https://auth-react-b1ea2com-default-rtdb.firebaseio.com/expense.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("Expense Added Successfully..");
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch((err) => {
        alert(err);
      });

    contxt.addExpense(data);
    dispatch(expenseAction.addedExpenses(data));
    dispatch(expenseAction.totalAmount(totalamount));
  };

  return (
    <div>
      <h3 class="secondTitle">Add a new Expense</h3>
      <form onSubmit={submitExpenseHandler}>
        <div class="formLine left">
          <label>Money Spent</label>
          <input type="number" ref={amountInputRef} />
        </div>
        <div class="formLine right">
          <label>Description</label>
          <input type="text" ref={descInputRef} />
        </div>
        <div class="formLine left">
          <label>Category</label>
          <select ref={listInputRef}>
            <option>Fare</option>
            <option>Food</option>
            <option>Movie</option>
            <option>Fuel</option>
            <option>Rent</option>
          </select>
        </div>
        <button class="btnn">Add Expense</button>
      </form>
    </div>
  );
};

export default Expenses;
