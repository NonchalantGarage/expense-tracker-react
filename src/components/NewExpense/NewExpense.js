import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from 'uuid';

const NewExpense = () => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: uuidv4()
    };
    console.log(expenseDate)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
