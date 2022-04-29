import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const NewExpense = ({ onAddExpense }) => {
  const [formStatus, SetFormStatus] = useState("off");

  const formStatusHandlerOn =()=>{SetFormStatus("on")};
  const formStatusHandlerOff =()=>{SetFormStatus("off")};

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
    formStatusHandlerOff()
  };

  if (formStatus === "off") {
    return (
      <div className="new-expense">
        <button className="new-expense button" onClick={formStatusHandlerOn}>
          Add New Expense
        </button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm cancel={formStatusHandlerOff} onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
