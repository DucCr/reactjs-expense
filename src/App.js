import Expenses from './component/Expense/Expenses';
import NewExpense from './component/NewExpense/NewExpenses';
import './index.css';
import { useState } from 'react';
function App() {

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'A Book',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2019, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];
  const [expenses,setNewExpense] = useState(DUMMY_EXPENSES);
  const saveExpenseNewHandler = (enteredExpenseNew) => {
    setNewExpense((prevExpenses) => {
      return [enteredExpenseNew,...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={saveExpenseNewHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
