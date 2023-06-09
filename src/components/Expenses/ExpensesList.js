import React from "react";
import ExpenseItem from './ExpenseItem'

import "./ExpensesList.css"

export default function ExpensesList(props) {

    if(props.expenses.length === 0)
        return (<h2 className="expenses-list__fallback">No Expenses Found.</h2>);
    return (
        <ul className="expenses-list">
            {props.expenses.map(element => { return <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date}/>})}
        </ul>
    );
}