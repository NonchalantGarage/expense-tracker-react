import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [pickedYear, newPickedYear] = useState(
    new Date().getFullYear().toString()
  );

  const pickedYearHandler = (selectedYear) => {
    newPickedYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredYearArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

let expensesContent = <p>No expenses found.</p>

if(filteredYearArray.length > 0 ){
  expensesContent = filteredYearArray.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />
  ))
}

  return (
    <Card className="expenses">
      <ExpenseFilter pickedYear={pickedYear} onPickYear={pickedYearHandler} />
     {expensesContent}
    </Card>
  );
}

export default Expenses;
