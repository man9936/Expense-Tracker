import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Store/Auth-Context";
import { ExpenseContextProvider } from "./Store/Expense-Context";
import store from "./Store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthContextProvider>
      <ExpenseContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExpenseContextProvider>
    </AuthContextProvider>
  </Provider>
);
//      https://auth-react-b1ea2com-default-rtdb.firebaseio./
//        AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0
//   https://auth-react-b1ea2-default-rtdb.firebaseio.com/expense