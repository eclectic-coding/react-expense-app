import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(({ title, amount, date, id }) => (
      <ExpenseItem
        title={title}
        amount={amount}
        date={date}
        key={id}
      />
    ))
  }

  return (

    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectedYear={filterChangeHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
