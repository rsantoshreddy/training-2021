import './TodoItem.css';

const TodoItem = ({ srNumber, date, title, status }) => {
  return (
    <div className='todo-item'>
      <div>{srNumber}</div>
      <div>{date.toString()}</div>
      <div>{title}</div>
      <div>{status}</div>
    </div>
  );
};

export default TodoItem;
