import './ExpenseList.css'
import ExpenseItem from './Expenseltem';

const ExpenseList = (props) => {

    if(props.items.length === 0){
        return(
            <h3 className="expenses-list__fallback">Not Found Expenses !</h3>
        )
    }

    return(
        <ul className="expenses-list">
            { 
                props.items.map(
                    (expenseItem) => ( // dấu {} của hàm map chuyển thành ()
                        <ExpenseItem 
                            key = {expenseItem.id}
                            title = {expenseItem.title}
                            date = {expenseItem.date}
                            amount = {expenseItem.amount}
                        />
                    )
                )
            }
        </ul>
    )
}

export default ExpenseList;