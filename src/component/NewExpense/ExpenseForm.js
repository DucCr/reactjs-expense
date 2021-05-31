import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmout] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    const ChangeTitleHandle = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(enteredTitle); 
        //set xong giá trị mới nhưng chưa kịp chạy lại đã log ra nên chưa hiện thị đc dữ liệu
    }
    const ChangeAmountHandle = (event) => {
        setEnteredAmout(event.target.value);
    }
    const ChangeDateHandle = (event) => {
        setEnteredDate(event.target.value);
    }

    const SubmitHandle = (event) => {
        
        //xóa bỏ sự kiện mặc định gửi dữ liệu form lên server làm load lại trang trong khi xử lý bằng js đc
        event.preventDefault();
        
        //khởi tạo object expense mới để lưu dữ liệu trên input 
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
        }
        //truyền expenseData vào như một đối số và nó sẽ là trị được xử lí bên conponet cha
        //trong trường hợp này conponent cha là NewExpense
        props.onSaveExpenseDate(expenseData);

        //sau khi submit thì trả các dữ liệu trên input về ""
        setEnteredTitle("");
        setEnteredAmout("");
        setEnteredDate("");
    }
    return (
        <form onSubmit={SubmitHandle}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        //value trong thẻ input là trạng thái đầu tiên mặc định của thẻ input
                        value={enteredTitle}
                        onChange={ChangeTitleHandle}
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="text" 
                        min="0.1" 
                        step="0.01"
                        value={enteredAmount}
                        onChange={ChangeAmountHandle}
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2018-01-01" 
                        max="2021-12-31"
                        value={enteredDate}
                        onChange={ChangeDateHandle}
                    ></input>
                </div>
                
                <div className="new-expense__actions">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;