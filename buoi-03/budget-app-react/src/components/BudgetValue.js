import {  formatStringAmount } from "../helper"

function BudgetValue ({ total }) {
  return (
    <div className="budget__value">{ formatStringAmount(total) }</div>
  )
}

export default BudgetValue