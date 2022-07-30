import BudgetItem from "../components/BudgetItem"

function BudgetIcomeList({ items }) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list" id="list-incomes">
        {items.map(item => <BudgetItem key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default BudgetIcomeList