import BudgetIncome from "../components/BudgetIncome"
import BudgetExpenses from "../components/BudgetExpenses"
import BudgetValue from "../components/BudgetValue"
import { useSelector } from 'react-redux'
import { calTotalAmount } from "../helper"

function BudgetHeader () {
    const listIncomes = useSelector(state => state).listDataIncome.filter((dataItem) => dataItem.amount > 0)
    const listExpenses = useSelector(state => state).listDataIncome.filter((dataItem) => dataItem.amount < 0)
    const totalIncomes = calTotalAmount(listIncomes)
    const totalExpenses = calTotalAmount(listExpenses)
    
    return (
        <div className="top">
            <div className="budget">
                <div className="budget__title"> 
                    Available Budget in 
                    <span className="budget__title--month">%Month%</span>:
                </div>
                <BudgetValue total = { totalIncomes + totalExpenses } />
                <BudgetIncome totalIncomes = { totalIncomes } />
                <BudgetExpenses totalExpenses = { totalExpenses } totalIncomes = { totalIncomes } />
            </div>
        </div>
    )
}

export default BudgetHeader