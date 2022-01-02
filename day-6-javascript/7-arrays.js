// creating arrays

let value = [1, 2, 3, 4];
value = new Array(1, 2, 3, 4);

let fruits = ['orange', 'banana', 'apple'];

let mixed = [22, 3, 'Hello', true, { a: 1 }, new Date(), null];

// get length
value = fruits.length;

// check for array type
value = Array.isArray(fruits);

// get  value
value = fruits[3];

// insert into array

fruits[5] = 'Pear';

// get index of item
value = fruits.indexOf('apple');

// Mutating Arrays
fruits.push('Berry');
fruits.unshift('Pineapple');

fruits.pop();
fruits.shift();
fruits.splice(1, 1);

fruits.reverse();

fruits.concat(mixed);

fruits.sort();

[11, 72, 93, 4, 34, 54].sort();

[11, 72, 93, 4, 34, 54].sort((a, b) => a - b);

fruits.find((ele) => {
  //returns first element matches the condition
  return ele === 'Apple';
});
