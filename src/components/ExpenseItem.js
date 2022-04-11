
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card'

function ExpenseItem(props) { 
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})

  return (
    <Card className = 'expense-item'>
    <ExpenseDate date = {props.date}/>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
