import { formatStringAmount, formatPercentAmount } from "../helper"

function BudgetItem ({ description, amount, total }) {
  return (
    <div className="item clearfix">
      <div className="item__description">{ description }</div>
      <div className="right clearfix">
        <div className="item__value">{ formatStringAmount(amount) }</div>
        { total && <div className="item__percentage">{ formatPercentAmount(amount, total) }</div> }
        <div className="item__delete">
          <button className="item__delete--btn"><i className="ion-ios-close-outline" /></button>
        </div>
      </div>
    </div>
  )
}

export default BudgetItem