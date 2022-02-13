import './App.css';
import TodoItem from './components/TodoItem';
import { todoList } from './mockData/todoList';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React!</h1>
      {todoList.map((task, index) => (
        <TodoItem {...task} srNumber={index} />
      ))}
    </div>
  );
}

export default App;

export const five = 5;
export const six = function (x, y) {
  return x + y;
};

// Note: only once default export is allowed in a js. but we can have multiple normal exports
