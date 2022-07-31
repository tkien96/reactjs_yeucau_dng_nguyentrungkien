import { useDispatch, useSelector } from 'react-redux'
import * as act from '../store/action'

function BudgetAdd () {
    const dispatch = useDispatch()
    const toggleClass =  useSelector(state => state.toggleClass)
    const classType = toggleClass ? 'add__type' : 'add__type red-focus'
    const classDescription = toggleClass ? 'add__description' : 'add__description red-focus'
    const classValue = toggleClass ? 'add__value' : 'add__value red-focus'
    const classBtn = toggleClass ? 'add__btn' : 'add__btn red'

    function handleAdd(){
        const addType = document.querySelector('.add__type').value
        const addDescription = document.querySelector('.add__description').value
        const addValue = document.querySelector('.add__value').value
        
        if (!addDescription) {
            return alert("description is required");
        }
        
        if (!addValue) {
            return alert("value is required");
        } else if (addValue < 0) {
            return alert("value is a positive number");
        }

        dispatch({
            type            : act.ACT_ADD_INCOME, 
            addType         : addType,
            addDescription  : addDescription,
            addValue        : addValue,
        })
    }

    return (
        <div className="add">
            <div className="add__container">
                <select className={ classType } onChange={() => dispatch({ type: act.ACT_CHANGE_TYPE })} >
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input type="text" className={ classDescription } placeholder="Add description" />
                <input type="number" className={ classValue } placeholder="Value" />
                <button className={ classBtn } onClick={() => handleAdd()}><i className="ion-ios-checkmark-outline" /></button>
            </div>
        </div>
    )
}

export default BudgetAdd