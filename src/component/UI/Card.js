import './Card.css';

function Card(props) { //tái sử dụng các code CSS trùng lặp
    const classes = 'card ' + props.className ;
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default Card;