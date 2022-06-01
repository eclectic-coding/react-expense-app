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

  return (

    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectedYear={filterChangeHandler} />
      {props.items.map(({ title, amount, date, id }) => (
        <ExpenseItem
          title={title}
          amount={amount}
          date={date}
          key={id}/>
      ))}
    </Card>
  );
};

export default Expenses;
