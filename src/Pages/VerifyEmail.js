import React, { useContext } from "react";
import BackButton from "../Components/Button/BackButton";
import Card from "../Components/Layout/Card";
import ExpenseContext from "../Store/Expense-Context";

const VerifyEmail = () => {
  const id = localStorage.getItem("token");

  const verifyMailHandler = () => {
    fetch(
      " https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          const data = resp.json();
          console.log(data);
          alert("Verification Mail sent successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  return (
    <Card>
      <BackButton />
      <button onClick={verifyMailHandler}>Verify Email</button>
    </Card>
  );
};

export default VerifyEmail;
