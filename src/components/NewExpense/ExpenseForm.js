import React, {useState} from "react";
import "./ExpenseForm.css"

function ExpenseForm(props) {

    // approach style 1
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("2019-01-01");

    // approach style 2
    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: '',
    //     }
    // );

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput(() => {
        //     return {
        //         enteredTitle: event.target.value,
        //         enteredAmount: userInput["enteredAmount"],
        //         enteredDate: userInput["enteredDate"],
        //     }
        // });
        console.log("title changed to", event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput(() => {
        //     return {
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     }
        // });
        console.log("amount changed to", event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // all 3 userInput approaches are the same
        // setUserInput((val) => {
        //     return {
        //         ...val,
        //         enteredDate: event.target.value,
        //     }
        // });
        console.log("date changed to", event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    function cancelHandler(event) {
        event.preventDefault();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* value sets an initial value for the input. upon submit, input is set to value */}
                    {/* upon submit we can set the states to the default values through submitHandler function */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button onClick={cancelHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;