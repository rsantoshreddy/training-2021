// var let const: to declare variables and constants

var age = 31;
const pi = 3.2;
// var address = "MP"
var name = 'santosh';
let name = 'reddy';

// var var = 'reddy'

{
  let name = 'Santosh test';
  let address = 'test';
  console.log(name);
  console.log('Inside block>>>', address);
}
console.log('outside block>>>', address);

// const name = 'Santosh';
// const $nam1234e$test_123 = 'Santosh';

// name = 'Santosh reddy';

// naming constraints/restriction
// 1. can use -> letter, numbers, _ and $
// 2. Can't start with number

// How to write multi workd vars
// var firstName = 'Santosh'; //camel case
// var first_name = 'Santosh'; //underscore
// var FirstName = 'Santosh'; //Pascal case

// LET, CONST

// 1. these are block scoped
// 2. once declared, then cant redeclare the variable
// 3. Let can change the content, but not with const
