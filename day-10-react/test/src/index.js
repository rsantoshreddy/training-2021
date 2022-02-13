import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { five, six } from './App';
import reportWebVitals from './reportWebVitals';

console.log(five);
console.log(six(6, 6));
// ReactDOM.render(React.createElement(App, {}), document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
