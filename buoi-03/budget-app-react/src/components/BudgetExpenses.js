import {  formatStringAmount, formatPercentAmount } from "../helper"

function BudgetExpenses ({ totalExpenses, totalIncomes }) {
  return (
    <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
            <div className="budget__expenses--value">{ formatStringAmount(totalExpenses) }</div>
            <div className="budget__expenses--percentage">{ formatPercentAmount(totalExpenses, totalIncomes) }</div>
        </div>
    </div>
  )
}

export default BudgetExpenses