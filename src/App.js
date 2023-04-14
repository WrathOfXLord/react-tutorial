import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const expenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.76,
    date: new Date(2019, 2, 27, 23, 12, 11)
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 94.76,
    date: new Date(2023, 2, 27, 23, 12, 11)
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 94.76,
    date: new Date(2020, 2, 27, 23, 12, 11)
  },
];

function App() {

  const [expenseList, setExpenseList] = useState(expenses);

  function newExpenseSaveHandler(expenseData) {
    setExpenseList((prevExpenseList) => [expenseData, ...prevExpenseList]);
  }

  return (
    <div>
      <NewExpense onSaveNewExpense={newExpenseSaveHandler}/>
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;
