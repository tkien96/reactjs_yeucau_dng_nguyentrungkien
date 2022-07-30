import './assets/style.css';
import BudgetHeader from "./components/BudgetHeader"
import BudgetAdd from "./components/BudgetAdd"
import BudgetContainer from "./components/BudgetContainer"

function App() {
  return (
    <>
      <BudgetHeader />
      <div className="bottom">
        <BudgetAdd />
        <BudgetContainer />
      </div>
    </>
  );
}

export default App;
