import React from "react";
import { useSelector } from "react-redux";
import BackButton from "../Button/BackButton";
import Premium from "../Button/Premium";
import Card from "../Layout/Card";
import Logout from "../Logout";
import DownloadCSV from "./Download/DownloadCSV";
import ExpenseList from "./ExpenseList";
import Expenses from "./Expenses";

const ExpenseShow = () => {
  return (
    <div>
      <Card>
        <span>
          <DownloadCSV />
        </span>
        <span>
          <BackButton />
          <Logout />
        </span>
        <Premium />
        <Expenses />
      </Card>
      <Card>
        <ExpenseList />
      </Card>
    </div>
  );
};

export default ExpenseShow;
