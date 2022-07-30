import BudgetIcomeList from "../components/BudgetIcomeList"
import BudgetExpensesList from "../components/BudgetExpensesList"
import { useSelector } from 'react-redux'
import { calTotalAmount } from "../helper"

function BudgetContainer () {
    const listIncomes = useSelector(state => state.listDataIncome).filter((dataItem) => dataItem.amount > 0)
    const listExpenses = useSelector(state => state.listDataIncome).filter((dataItem) => dataItem.amount < 0)
    const total = calTotalAmount(listIncomes)
    return (
        <div className="container clearfix">
            <BudgetIcomeList items={ listIncomes } />
            <BudgetExpensesList items={ listExpenses } total={ total } />
        </div>
    )
}

export default BudgetContainer