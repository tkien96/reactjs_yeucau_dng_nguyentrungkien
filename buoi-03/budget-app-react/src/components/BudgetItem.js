import { formatStringAmount, formatPercentAmount } from "../helper"
import { useDispatch } from 'react-redux'
import * as act from '../store/action'

function BudgetItem ({ id, description, amount, total }) {
  const dispatch = useDispatch()
  return (
    <div className="item clearfix">
      <div className="item__description">{ description }</div>
      <div className="right clearfix">
        <div className="item__value">{ formatStringAmount(amount) }</div>
        { total && <div className="item__percentage">{ formatPercentAmount(amount, total) }</div> }
        <div className="item__delete" onClick={() => dispatch({ type: act.ACT_DELETE_INCOME, idDelete: id })}>
          <button className="item__delete--btn"><i className="ion-ios-close-outline" /></button>
        </div>
      </div>
    </div>
  )
}

export default BudgetItem