import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const dataPointMax = Math.max(...dataPointValue);// chuyển mảng thành các số 

    return(
        <div className="chart">
            {
                props.dataPoints.map( (dataPoint) => (
                    <ChartBar 
                        key={dataPoint.label}
                        value={dataPoint.value}
                        valueMax={dataPointMax}
                        label={dataPoint.label}
                    />
                ))
            }
        </div>
    )
}

export default Chart;