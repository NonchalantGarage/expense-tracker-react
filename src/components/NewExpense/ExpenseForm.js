import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData, cancel}) => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [enteredInput, setEnteredInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: event.target.value
    // })

    // React schedules state updates, which is why you should explicitly use close to reutrn previous state spread operator
    // safer to work on the latest state
    setEnteredInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: event.target.value
    setEnteredInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: event.target.value
    // })
    setEnteredInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredInput.enteredTitle,
      amount: +enteredInput.enteredAmount,
      date: new Date(enteredInput.enteredDate),
    };
    onSaveExpenseData(expenseData);
    
    setEnteredInput({
      enteredDate:"",
      enteredAmount: "",
      enteredTitle: "" 
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancel}type="submit">Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
