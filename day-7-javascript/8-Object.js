let person = {
  firstName: 'santosh',
  age: 31,
  lastname: 'reddy',
};

const age = 31;
const numbers = [1, 2, 3, 40, 5, 6, 7, 8, 9, 0];
const names = ['Santosh', 'Ramesh', 'Kunal'];
let people = [
  { name: 'santsoh', age: 6 },
  { name: 'raghav', age: 7 },
];
const rr = [1, 'test', true, { name: 'test213234' }, { name: 'test' }, null];
console.log(person);

var numberObj = { test: 3245, safdasdf: 2536476, asfdsafd: 344 };
var numberArray = ['taeetsa', 3245, false];
console.log(numberObj);
console.log(numberArray);

// let value;

// value = person.firstName;
// value = person['firstName'];

// // Object in side object

person = {
  firstName: 'santosh',
  address: {
    street: '#3',
    pin: '761020',
  },
  getBirthYear: function () {
    return 2022 - age;
  },
};

// let people = [
//   { name: 'x', age: 6 },
//   { name: 'y', age: 7 },
// ];
