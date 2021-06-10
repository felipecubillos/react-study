import "./ExpensesItem.css";

function ExpensesItem() {
  const expenseDate = new Date(2021, 6, 10);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 298.26;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
