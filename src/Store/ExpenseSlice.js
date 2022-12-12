import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenseData: [],
  totalAmount: 0,
};
const ExpenseSlice = createSlice({
  name: "Expense",
  initialState: initialExpenseState,
  reducers: {
    addedExpenses(state, action) {
      state.expenseData = [...state.expenseData, action.payload];
    },
    totalAmount(state, action) {
      state.totalAmount = state.totalAmount + action.payload;
      console.log(state.totalAmount);
    },
  },
});

export default ExpenseSlice.reducer;

export const expenseAction = ExpenseSlice.actions;
