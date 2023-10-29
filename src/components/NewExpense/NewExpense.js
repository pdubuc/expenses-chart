import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

// Lesson 80. Child-to-Parent Component Communication (Bottom Up): added props
const NewExpense = (props) => {
  // Assignment #4:
  const [isEditing, setIsEditing] = useState(false);

  // Lesson 80. Child-to-Parent Component Communication (Bottom Up)
  // NewExpense is the parent and we're communicating up to it from the child component: ExpenseForm.js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  let showAddForm;

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingHandler = (event) => {
    setIsEditing(false);
  };

  if (isEditing) {
    showAddForm = (
      <div>
        {/* onSaveExpenseData comes from Lesson 80. Child-to-Parent Component Communication (Bottom Up) 
        We're adding this prop that we named starting with "on" so it's clear that it's a function that 
        can then be called inside the ExpenseForm component.  So this function is defined inside NewExpense.js */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      </div>
    );
  } else {
    showAddForm = (
    <div>
      <button onClick={startEditingHandler}>Add New Expense</button>
    </div>
    );
  }

  return <div className="new-expense">{showAddForm}</div>;
};

export default NewExpense;
