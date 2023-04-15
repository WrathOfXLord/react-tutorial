import React, { useState } from "react";
import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm";

function NewExpense(propsData) {

    const [expenseClicked, setExpenseClicked] = useState(<button onClick={expenseClickHandler}>Add New Expense</button>);
    function expenseClickHandler() {
        setExpenseClicked(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />);
    }

    function cancelHandler() {
        setExpenseClicked(<button onClick={expenseClickHandler}>Add New Expense</button>);
    }

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        propsData.onSaveNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {expenseClicked}
        </div>
    );
}

export default NewExpense;