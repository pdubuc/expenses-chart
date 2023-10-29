import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// Lesson 56. An Alternative Function Syntax: 
// function App() {
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Lesson 80. Child-to-Parent Component Communication (Bottom Up)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* Added prop "onAddExpense" in Lesson 80. Child-to-Parent Component Communication (Bottom Up) 
      These are 2 child components referenced here in App.js: NewExpense and Expenses */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses}></Expenses>
      {/* Alternative syntax mentioned in lesson 49
      <ExpenseItem
        expense={expenses[0]}
      ></ExpenseItem> */}
    </div>
  );
}

// Lesson 54. A Closer Look at JSX
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, "Let's get started!"),
//     React.createElement(Expenses, {items: expenses })
//   );
// }

export default App;
