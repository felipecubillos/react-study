import ExpensesComponent from "./components/Expenses/ExpensesComponent";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  { title: "food", date: new Date(2021, 6, 2), amount: 20.36 },
  { title: "clothes", date: new Date(2021, 5, 26), amount: 80.26 },
  { title: "beer", date: new Date(2021, 6, 8), amount: 9.88 },
];

function App() {
  return (
    <div className="App">
      <NewExpense></NewExpense>

      <ExpensesComponent items={expenses}></ExpensesComponent>
    </div>
  );
}

export default App;
