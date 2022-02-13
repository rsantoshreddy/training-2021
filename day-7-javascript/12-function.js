// function declaration
function foo() {
  return 'Hi there';
}

console.log(foo());
console.log(foo());

var x = 10;

// immediately invoked function expression(iife)
(function func() {
  console.log('Hi there 2');
})();

// func();

// property methods

const human = {
  name: 'test',
  shopping: function () {
    console.log("I'm inside a store");
  },
};
console.log(human.name);
human.shopping();

// question 1
//  Add two numbers (3,4)

// add(1, 6);

// question 2
//  Add two numbers (3,40)

// add(3, 40);

// question 3
//  Add two numbers (30,40)

// add(30, 40);

function add(a, b) {
  console.log(a);
  console.log(b);
  var c = a + b;
  console.log(c);
}

function cook() {
  console.log('collect ingredients');
  console.log('on the stove');
  console.log('Prepare Integredients');
  console.log('cook');
}
cook();
cook();
