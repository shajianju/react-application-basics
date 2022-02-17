import Card from "./Card";
import ExpeneseDate from "./ExpenseDate";
import React, { useState } from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  //UseState make the changes done to the tittle to reflect
  //it just reload the components
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!!!!");
  };

  return (
    <div className="expense-item">
      <ExpeneseDate date={props.date}></ExpeneseDate>
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Here </button>
    </div>
  );
}

export default ExpenseItem;
