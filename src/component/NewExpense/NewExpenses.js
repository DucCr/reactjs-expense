import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing,setIsEditing] = useState(false);

    /**
     * tạo 1 con trỏ function thực hiện chức năng để lưu được data và truyền cho onSaveExpenseData
    */
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // khởi tạo object mới và dùng parameter để truyền đc obj của ExpenseForm vào
        const expenseData = {
            id : Math.random().toString(), //thêm 1 key id mới cho object
            ...enteredExpenseData,// truyền objec chưa dữ liệu của ExpenseForm
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);// khi thêm thành công thì đóng form
    }

    const startIsEditing = () => {
        setIsEditing(true);
    }

    const stopIsEditing = () => {
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startIsEditing}>Add Expense</button>}
            {isEditing && <ExpenseForm 
                onSaveExpenseDate={saveExpenseDataHandler} 
                onCancel={stopIsEditing}    
            />}
        </div>      
    )
}
/**
 *App -> NewExpensive -> ExpensiveForm 
  khi đó trong component ExpensiveForm sẽ có props.onSaveExpenseDate(expenseData) có tham số truyền vào là expenseData
  sẽ thực hiện giống hệ hàm saveExpenseDataHandler(expenseData) vì 
        - props dùng để truyền dữ liệu qua các component (dữ liệu có thể là 1 con trỏ hàm)
        - dữ liệu phải được lấy từ component cha và truyền vào conponent com với cách gọi props.(thuộc tính đc gọi)

  <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
  -------------->>  truyền vào 1 con trỏ hàm
 */
export default NewExpense;