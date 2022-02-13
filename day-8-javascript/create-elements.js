const p = document.createElement('p');
p.setAttribute('class', 'para');
// p.textContent = 'Hi there! how are you?';
let text = document.createTextNode('Hi there! how are you?');
p.appendChild(text);

const heading = document.querySelector('h1:nth-child(3)');
// console.log(heading);
const containerNode = heading.parentNode;
containerNode.insertBefore(p, heading);
// console.log('inserting before heading.......');
// console.log(containerNode.innerHTML);

// console.log(p);
// Replace elements
// const list = document.querySelector('ul');
// containerNode.replaceChild(p, list);
// console.log('replace with list.......');
// console.log(containerNode);

// Remove Element
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
// list[0].removeChild()

list.removeChild(listItems[3]);
