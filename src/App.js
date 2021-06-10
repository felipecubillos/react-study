import ExpensesItem from "./components/ExpensesItem";
import "./App.css";

const expenses = [
  { title: "food", date: "2021-06-01", amount: 20.36 },
  { title: "clothes", date: "2021-06-02", amount: 80.26 },
  { title: "beer", date: "2021-06-06", amount: 9.88 },
];

function App() {
  return (
    <div className="App">
      <h1>This is the principal component</h1>
      <ExpensesItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpensesItem>
      <ExpensesItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpensesItem>
      <ExpensesItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpensesItem>
    </div>
  );
}

export default App;
