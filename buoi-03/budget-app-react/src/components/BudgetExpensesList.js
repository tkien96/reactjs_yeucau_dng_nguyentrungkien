import BudgetItem from "../components/BudgetItem"

function BudgetExpensesList ({ items, total }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list" id="list-expenses">
        { items.map(item => <BudgetItem key={item.id} { ...item } total={ total } />) }
      </div>
    </div>
  )
}

export default BudgetExpensesList