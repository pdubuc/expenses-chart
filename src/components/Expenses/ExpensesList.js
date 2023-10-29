import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

  // Lesson 89. Outputting Conditional Content --> changed a lot since this lesson!
  // Lesson 90. Adding Conditional Return Statements

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
    {
        props.items.map((expense) => (
            <ExpenseItem
              key={expense.id} // Lesson 88. Understanding "Keys"
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
    }
  </ul>
};

export default ExpensesList;