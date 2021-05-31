import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList'
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {

    const [filteredYear,setFilteredYear] = useState('2021');

    const selectedYearHandle = (selectedYear) => {
        setFilteredYear(selectedYear);        
    }

    const filterExpectedYear = props.items.filter( (item) => {
        return item.date.getFullYear().toString() === filteredYear;
    })

  return (
    <Card className="expenses">
        <ExpenseFilter 
            selected = {filteredYear}
            onSelectedYearHandle = {selectedYearHandle} />
        <ExpenseChart expenses={filterExpectedYear}/>
        <ExpenseList items = {filterExpectedYear}/>
    </Card>
  );
}

export default Expenses;