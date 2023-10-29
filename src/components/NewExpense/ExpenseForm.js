import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput ] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // Lesson 74. Working with Multiple States
    // Lesson 73. Listening to User Input (this is NOT the right way to do it!  See Lesson 72 or 74.)
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    // Lesson 74. Updating State that Depends on the Previous State
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    // });

    // console.log(event.target.value); // Lesson 73. Listening to User Input
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })
  };

  // Lesson 77. Alternative: Creating a Shared Handler Function
  // const inputChangeHandler = (identifier, value) => {
  //     if (identifier === 'title') {
  //         setEnteredTitle(value);
  //     } else if (identifier === 'date') {
  //         setEnteredDate(value);
  //     } else {
  //         setEnteredAmount(value);
  //     }
  // };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevents the default of the request being sent causing the page to reload

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Lesson 80. Child-to-Parent Component Communication (Bottom Up)
    // We pass the above expenseData as an argument which is
    // the value that will be received as a parameter in NewExpense.js
    props.onSaveExpenseData(expenseData);

    // Lesson 79. Adding Two-Way Binding - allows you to gather user input, but also change it (e.g., upon form submission)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        {/* Lesson 77. Alternative: Creating a Shared Handler Function
          <input type="text" value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} /> */}
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
