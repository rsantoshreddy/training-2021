// creating arrays
// let value = [1, 2, 3, 4];
// value = ['one', 'two', 'three'];
// value = ['one', 2, null, undefined, { a: 'test' }];
// index[ 0,       1,    2]

// define array with constructor
value = new Array(1, 2, 3, 4);

// console.log(value[3]);

// console.log(typeof value);

// let fruits = ['orange', 'banana', 'apple'];

// let mixed = [22, 3, 'Hello', true, { a: 1 }, new Date(), null];

// // get length
// value = fruits.length;

// // check for array type
// value = Array.isArray(fruits);
// console.log(value instanceof Array);
// console.log(Array.isArray(value));
// // get  value
// value = fruits[3];

// var num = 5;
// console.log(num);
// num = 6;
// console.log(num);
// value[2] = 70;

value[4] = 20;
// 5
// 6
// 7
// 8
// 9
//...
value[67] = 80;
// 68
// 69
// 70....99
value[100] = 56;

// let fruits = ['orange', 'banana', 'apple'];
// // insert into array

// fruits[5] = 'Pear';
// console.log(fruits);

// // get index of item
// value = fruits.indexOf('apple');

// console.log('first', fruits);

// // Mutating Arrays
// fruits.push('Berry');
// console.log('second', fruits);

// fruits.unshift('Pineapple');
// console.log('third', fruits);

// fruits.pop();
// console.log('fourth', fruits);
// fruits.shift();
// console.log('fifth', fruits);

// fruits.splice(2, 0, 'berry');
// console.log('sixth', fruits);

// fruits.reverse();
// console.log('seventh', fruits);

// let mixed = ['berry', 'berry2'];

// let x = mixed.concat(fruits);

// console.log('second', mixed);
// console.log('second', fruits);
// console.log('second', x);

// fruits.sort();

var arr = [11, 72, 93, 4, 34, 4, 54];
console.log(arr);
arr.sort();
console.log(arr);

arr.sort((a, b) => {
  console.log(a, b);
  return b - a; //+value, -value, 0
});
console.log(arr);

// function add(x, y) {
//   return x + y;
// }

// console.log(add(5, 5));
// fruits.find((ele) => {
//   //returns first element matches the condition
//   return ele === 'Apple';
// });
