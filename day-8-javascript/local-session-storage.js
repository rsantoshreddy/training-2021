// set local storage and session storage
// removeItem local storage and session storage
// getItem local storage and session storage

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  getItem(event.target[0].value);
  sessionStorage.setItem('input', event.target[0].value);
});

const updateList = function (value) {
  const li = document.createElement('li');
  let text = document.createTextNode(value);
  li.appendChild(text);
  li.setAttribute('class', 'item');

  const button = document.createElement('button');
  let x = document.createTextNode('x');
  button.setAttribute('class', 'delete');
  button.appendChild(x);

  li.appendChild(text);
  li.appendChild(button);
  const ul = document.querySelector('ul');
  ul.appendChild(li);
};

const getItem = function (value) {
  // get item (read)
  const todoList = localStorage.getItem('todoList');
  // convert to Array
  const todoArr = todoList ? todoList.split(',') : [];

  // check if form is submitted
  if (value) {
    todoArr.push(value);
    localStorage.setItem('todoList', todoArr);
  }

  // Print to UI
  document.querySelector('ul').innerHTML = null;
  for (let index = 0; index < todoArr.length; index++) {
    updateList(todoArr[index]);
  }
};
getItem();
