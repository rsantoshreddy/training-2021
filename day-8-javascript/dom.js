// Selecting dom elements with document
// e.g document.head, document.body, document.form, document.script

const person = {
  name: 'test',
};

const allElements = document.all;
const title = allElements[5];
console.log(allElements);
let h = allElements[9];

console.log(title.textContent);

// Selecting single element
h = document.getElementById('headline');
// getting attributes and setting

h.style.backgroundColor = 'green';

h = document.querySelector('.heading-class');
console.log(h.className);
console.log(h.style);

let listItem = document.querySelector('li');
// let listItems = document.querySelectorAll('li');
// getting Elements (collection of items)
let listItems = document.getElementsByTagName('li');
let heading = document.getElementsByTagName('h1');
console.log(listItem);
console.log(listItems);
console.log(heading);
h = document.getElementById('headline');
h.textContent = 'Hello World';

// document.getElementsByClassName
