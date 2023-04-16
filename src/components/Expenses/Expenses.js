import React, { useState } from 'react'
import './Expenses.css'

import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
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
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>

    );
}

export default Expenses;