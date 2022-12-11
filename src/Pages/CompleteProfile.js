import React, { useRef } from "react";

const CompleteProfile = () => {
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedName = nameInputRef.current.value;
    const updatedNumber = numberInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0",
      {
        method: "POST",
        body: JSON.stringify({
          name: updatedName,
          number: updatedNumber,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp", resp);
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log("endThen", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form>
        <div>
          <label> Enter Your Full Name</label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div>
          <label>Contact No.</label>
          <input type="number" ref={numberInputRef} />
        </div>
        <button onClick={updateHandler}>Update</button>
      </form>
    </div>
  );
};

export default CompleteProfile;
