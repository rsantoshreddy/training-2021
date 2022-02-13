// global scope
// function scope
// block scope

var a = 10;
let b = 20;
const c = 30;

a = 11;
b = 12;

{
  var x = 120;
  let y = 90;
  const z = 30;
  console.log(y);
  console.log(z);
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(x);

function foo() {
  var g = '50';
  let h = '50';
  const i = '50';
  console.log('>>>>', g);
  console.log('>>>>', h);
  console.log('>>>>', i);
}
foo();

console.log(g);

// 1. By default in JS variables are function scoped.
// 2. let and const are block scoped but not var
// 3. const cant be changes;
