import React, { useState } from 'react'
import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(propData) {
    const [filterDate, setFilterDate] = useState("2019");

    const filteredExpenses = propData.expenses.filter(element => { return element.date.getFullYear().toString() === filterDate });
    const filterChangeHandler = (selectedDate) => {
        setFilterDate(selectedDate);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterDate} onFilterDateChange={filterChangeHandler} />
                {filteredExpenses.map(element => {return <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date}></ExpenseItem>})}
            </Card>
        </div>

    );
}

export default Expenses;