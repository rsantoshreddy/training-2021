const body = document.querySelector('body');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const td = document.querySelector('#td');

td.addEventListener(
  'click',
  function (e) {
    console.log('delete button');
  },
  { capture: false }
);

tbody.addEventListener(
  'click',
  function (e) {
    console.log('tbody');
  },
  { capture: false }
);

table.addEventListener(
  'click',
  function (e) {
    console.log('table');
  },
  { capture: false }
);

body.addEventListener(
  'click',
  function (e) {
    console.log('body');
  },
  { capture: false }
);

// Event phases: 3
// 1. Capturing (delegation)
// 2. Target
// 3. Bubling
