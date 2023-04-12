import React from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  function newExpenseSaveHandler(expenseData) {
    expenses.push(expenseData);
    console.log(expenseData);
    console.log(expenses);
  }
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.76,
      date: new Date(2018, 2, 27, 23, 12, 11)
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.76,
      date: new Date(2023, 2, 27, 23, 12, 11)
    },
  ];

  return (
    <div>
      <NewExpense onSaveNewExpense={newExpenseSaveHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
