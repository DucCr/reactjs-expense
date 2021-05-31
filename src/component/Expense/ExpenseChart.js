import Chart from '../Chart/Chart';


const ExpenseChart = (props) => {

    const chartDataPoints = [
        { label : 'Jan' , value : 0},
        { label : 'Feb' , value : 0},
        { label : 'Mar' , value : 0},
        { label : 'Apr' , value : 0},
        { label : 'May' , value : 0},
        { label : 'Jun' , value : 0},
        { label : 'Jul' , value : 0},
        { label : 'Aut' , value : 0},
        { label : 'Sep' , value : 0},
        { label : 'Oct' , value : 0},
        { label : 'Nov' , value : 0},
        { label : 'Dep' , value : 0},
    ];
    //tính tổng tiền của từng tháng rồi gán vào value cho các tháng tương ứng trên biểu đồ
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();// getMonth trả về 0->11
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    
    return(
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpenseChart;