import React, { useState } from "react";
import "./NewExpense.css";
const ExpenseForm = (props) => {
  const [title, setEnteredTitile] = useState("");
  const [amount, setNewAmountEntered] = useState("");
  const [date, setNewDateEntered] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleHandler = (event) => {
    setEnteredTitile(event.target.value);
    //setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountListner = (event) => {
    //setUserInput({ ...userInput, enteredDate: event.target.value });

    setNewAmountEntered(event.target.value);

    // userInput((prev) => {
    //   return { ...prev, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setNewDateEntered(event.target.value);

    // setUserInput(...userInput, event.target.value);
    //to save latest value, since react is a scheduler
    // userInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      newTitle: title,
      newAmount: amount,
      newDate: date,
    };

    props.onSaveExpenseData = expenseData;
    setEnteredTitile("");
    setNewDateEntered("");
    setNewAmountEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control input">
          <label>Titile</label>
          <input type="text" value={title} onChange={titleHandler}></input>
        </div>
        <div>
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountListner}></input>
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
