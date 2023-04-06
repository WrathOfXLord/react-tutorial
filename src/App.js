import Expenses from "./components/Expenses";

function App() {
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
    <Expenses expenses={expenses} />
  );
}

export default App;
