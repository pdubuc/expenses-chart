import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Lesson 73. Listening to User Input
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* Lesson 73. Listening to User Input
      <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

// Alternative syntax "Object Destructuing right in the function parameter list" mentioned in Lesson 49:
// function ExpenseItem({date, title, amount}) {
//     return (
//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${amount}</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItem;
