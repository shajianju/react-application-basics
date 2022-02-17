import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import React, { useState } from "react";
import ExpenseFilter from "./NewExpense/ExpenseFilter.js";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterExpenseFilter = (selectdYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <ExpenseFilter selected={selectedYear}></ExpenseFilter>
      <div className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default Expenses;
