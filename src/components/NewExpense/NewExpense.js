import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const NewExpense = ({ onAddExpense }) => {
  const [formStatus, SetFormStatus] = useState(false);

  const formStatusHandlerOn = () => {
    SetFormStatus(true);
  };
  const formStatusHandlerOff = () => {
    SetFormStatus(false);
  };

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
    formStatusHandlerOff();
  };
  return(
  <div className="new-expense">
    {!formStatus && 
      <button className="new-expense button" onClick={formStatusHandlerOn}>
        Add New Expense
      </button>
    }
    {formStatus && (
      <ExpenseForm
        cancel={formStatusHandlerOff}
        onSaveExpenseData={saveExpenseDateHandler}
      />
    )}
  </div>
  ) 
};

export default NewExpense;
