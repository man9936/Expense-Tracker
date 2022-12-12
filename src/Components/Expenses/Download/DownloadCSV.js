import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DownloadCSV = () => {
  const data = useSelector((state) => state.expense.expenseData);
  console.log("data", data);

  const makeCSV = (rows) => {
    console.log("rows", rows);

    const csv = rows
      .map((r) => r.category + "," + r.amount + "," + r.description)
      .join("/n");
    console.log("hi", csv);
    return csv;
  };
  useEffect(() => {
    const a = document.getElementById("a");
    const blob = new Blob([makeCSV(data)]);
    console.log("blob", blob);
    a.href = URL.createObjectURL(blob);
  }, []);

  return (
    <div>
      <a id="a" download="expensedata.csv">
        Download Expense Data
      </a>
    </div>
  );
};

export default DownloadCSV;
