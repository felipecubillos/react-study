import "../Expenses/ExpensesItem.css";
import Card from "../UI/Card";
import ExpensesDate from "../Expenses/ExpensesDate";
import { useState } from "react";

const ExpensesItem = (props) => {
  // use the hook to manage state
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // use the function to change the value
    setTitle("new value");
  };

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}> click me </button>
      </div>
    </Card>
  );
};

export default ExpensesItem;
