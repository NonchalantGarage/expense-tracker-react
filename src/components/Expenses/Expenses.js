import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart";


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

  return (
    <Card className="expenses">
      <ExpenseFilter pickedYear={pickedYear} onPickYear={pickedYearHandler} />
      <ExpensesChart expenses={filteredYearArray}/>
     <ExpensesList items = {filteredYearArray}/>
    </Card>
  );
}

export default Expenses;
