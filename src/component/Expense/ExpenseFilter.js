import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const dropDowExpense = (event) => {
        const selectedYear = event.target.value;
        props.onSelectedYearHandle(selectedYear);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropDowExpense}>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;