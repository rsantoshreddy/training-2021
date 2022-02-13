// hoisting
//   1. while running javascript, it goes through two phases. i. compile ii. execution

//   Call
const summation = sum(3, 2);
console.log('summation=', summation);

function sum(x, y) {
  // console.log(this);

  this.value = x + y;
  // console.log(arguments);
  return x + y;
}

//   Call
//   const sumValue = add(3, 2);
//   console.log('sumValue=', sumValue);

add = function (x, y) {
  console.log(this);
  console.log(arguments);
  this.value = x + y;
  return x + y;
};

//   const addArrow = (x, y) => {
//     console.log(this);
//     console.log(arguments);
//     return x + y;
//   };
//   //   Call
//   const sumValue2 = addArrow(3, 2);
//   console.log('sumValue2=', sumValue2);

//   1. In normal function "this" and "arguments" are present implicitly but not in arrow function
//   2. arrow function cant be used as constructor.

const button = document.getElementById('test');
const content = document.getElementById('content');

button.addEventListener('click', function () {
  content.append('hi');
  console.log('from doubt.js');
});

// function App() {
//   return (
//     <div className='App'>
//       <h1>Welcome to React!</h1>
//     </div>
//   );
// }

// App();

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Person extends Animal {
  constructor(name) {
    super(name);
  }
}

class Wild {
  constructor() {}
}
class Reptiles {
  constructor() {}
}

// function Person(name) {
//   this.name = name;
// }
// function Person1(name) {
//   this.name = name;
// }
// function Person2() {}
// Person1.prototype = new Person('test');
// Person2.prototype = new Person(name);

const testObj = new Person('test');
console.log(testObj);
