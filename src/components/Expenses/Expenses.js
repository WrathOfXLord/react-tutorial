import React, {useState} from 'react'
import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(propData) {
    const [filterDate, setFilterDate] = useState("2019");
    const expenses = propData.expenses.map(element => {
        return <ExpenseItem title={element.title} amount={element.amount} date={element.date}></ExpenseItem>
    });

    const filterChangeHandler = (selectedDate) => {
        setFilterDate(selectedDate);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterDate} onFilterDateChange={filterChangeHandler} />
                {expenses}
            </Card>
        </div>

    );
}

export default Expenses;