import ExpensesComponent from "./components/Expenses/ExpensesComponent";
import "./App.css";

const expenses = [
  { title: "food", date: new Date(2021, 6, 2), amount: 20.36 },
  { title: "clothes", date: new Date(2021, 5, 26), amount: 80.26 },
  { title: "beer", date: new Date(2021, 6, 8), amount: 9.88 },
];

function App() {
  return (
    <div className="App">
      <h1>This is the principal component</h1>

      <ExpensesComponent items={expenses}></ExpensesComponent>
    </div>
  );
}

export default App;
