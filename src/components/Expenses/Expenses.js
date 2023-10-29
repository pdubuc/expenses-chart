import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");

  // Lesson 82. Derived/Computed State
  // let filterInfoText = "2019, 2021 & 2022";

  //   if (pickedYear === "2019") {
  //     filterInfoText = "2020, 2021 & 2022";
  //   } else if (pickedYear === "2020") {
  //     filterInfoText = "2019, 2021 & 2022";
  //   } else if (pickedYear === "2021") {
  //     filterInfoText = "2019, 2020 & 2022";
  //   } else {
  //     filterInfoText = "2019, 2020 & 2021";
  //   };

  const filterChangeHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  // Assignment 3. Working with Lists
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* ExpenseFilter is a "Controlled Component", since both the value and changes to the value are not handled in the component itself, but in a parent component.  Lesson 83. Controlled vs Uncontrolled Components & Stateless vs Stateful Components */}
        <ExpenseFilter
          selected={pickedYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Lesson 82. Derived/Computed State
        <p>Data for years {filterInfoText} is hidden.</p> */}

        {/* 7-22-23: React tutor's solution instead of filteredExpenses
        {props.items
        .filter( (expense)=> {
          return expense.date.getFullYear() === +pickedYear
        }) */}
        
        {/* Lesson 93. Wrap Up & Next Steps */}
        <ExpensesChart expenses={filteredExpenses} />

        {/* Lesson 90. Adding Conditional Return Statements */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
