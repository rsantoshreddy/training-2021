// Interactive elements
// button
// a
// image

const del = document.querySelector('.delete');
const heading = document.querySelector('h1');
// console.log(del);

// del.addEventListener('mouseleave', function (e) {
//   console.log('delete button clicked');
// });
heading.addEventListener('click', handleEvent);

// addEventListener();

// Mouse Events
// 'click'
// 'dblclick'
// 'mousedown'
// 'mouseup'
// 'mouseenter'
// 'mouseleave'

const input = document.querySelector('input');

input.addEventListener('cut', handleEvent);

input.addEventListener('paste', handleEvent);

input.addEventListener('input', handleEvent);

function handleEvent(e) {
  console.log(e.target.value);
  console.log(e.target.innerText);
  console.log(e.type);
}

// Keyborad Events
// 'keydown'
// 'keyup'
// 'keypress'
// 'focus'
// 'blur'
// 'cut'
// 'paste'
// 'input'
// 'change' //<select>

// 1. how to add event : with help of addEventListener
// 2. what is call back handler/function : function which handles/listens to event
// 3. What is event object: the implicit object available in call back handler
