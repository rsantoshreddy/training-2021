// constructor and this

// anonymous;
// (function () {});

// function Person(name) {
//   this.name = name;
//   //console.log(age);
//   console.log('Person');
// }

// // Person();

// new Person('test');

// Note: if you are using funciton keyword to create a function, then implicitly we will have 'this' and 'arguments';
// Note 2: All constructor should have 'function' key word while declaring an constructor;

// function Animal(hi, num1, num2) {
//   console.log(hi);

//   console.log(this);
//   console.log(arguments);
// }
// new Animal('Hi there', 23, 56);

// build in constructors
// const arr1 = [1, 2, 3];
// console.log(arr1);
// const arr2 = new Array(4, 5, 6);
// console.log(arr2);

// // String
// var name = 'John';
// console.log(name);
// var name2 = new String('John 2');
// console.log(name2);
// // Number
// var test = 10;
// var test2 = Number(1355);

// // Boolean
// var isMarried = true; //false
// var isMarried = Boolean(true); //false
// Function
// Object
// Arrays

// Prototypes
// const testObj = { name: 'xyz', goToMarket: function () {} };
// console.log(testObj);
// // Every Object in the JS has a prototype Object. Prototype is nothing but another object
// // hasOwnProperty()

function Person(name) {
  //   this.name = name;
  //   this.walk = function () {
  //     console.log('walking...');
  //   };
}

Person.prototype = {
  name: 'x',
  walk: function () {
    console.log('walking...');
  },
};

Person.prototype.walk = function () {
  console.log('walking...');
};

const child = new Person('child');
// child.name = 'child';
console.log(child);
console.log(child.name);
console.log(child.walk());

const child2 = new Person('child2');
// child2.name = 'child2';
console.log(child2);
console.log(child2.name);
console.log(child2.walk());
