import "./ExpensesItem.css";

function ExpensesItem(props) {
  const expenseDate = new Date(2021, 6, 10);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 298.26;
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
