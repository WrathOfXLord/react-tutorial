import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(propData) {
    const expenses = propData.expenses.map(element => {
        return <ExpenseItem title={element.title} amount={element.amount} date={element.date}></ExpenseItem>
    });
    return (
        <div className="expenses">{expenses}</div>
    );
}

export default Expenses;