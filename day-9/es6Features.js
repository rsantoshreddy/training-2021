function functionName() {
  console.log('Hi');
  console.log(this);
  console.log(arguments);
}
//functionName(1, 2, 3);
//   const obj = new functionName();
// ==============================
const functionNameArrow = (x) => console.log(this);

functionNameArrow('Hi there');
//   const obj2 = new functionNameArrow();

//   1. in normal function this and arguments are present implicitly
//   2. arrow function cant be used as constructor.

//   + - * ...(rest or spread)

let x = true;
//   if (x) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

const y = 2 + 3;

x === y ? console.log(true) : console.log(false);

//   const arr = [1, 2, 3, 4];

//   const [firstEle, secondEle, ...test] = arr;

//   console.log(firstEle);
//   console.log(secondEle);
//   console.log(test);

//    const arr = [1, 2, 3, 4];

const obj = {
  name: 'x',
  age: 23,
  address: { houseNumber: 12 },
  friends: ['test', 'test2'],
};
const { name, friends, ...rest } = obj;

console.log(name);
console.log(friends);
console.log(rest);

const args = [1, 2, 3, 4];
//   const add = (a, b, c) => {
//     return a + b + c;
//   };
const add = ({ name, age, friends }) => {
  // return 'name: ' + name + '\nage: ' + age + '\nfriends: ' + friends;
  return `
        name: ${name}
        age: ${age} 
        friends: ${friends}
        `;
};
const results3 = add(...args); // add(1, 2, 3, 4)
const results = add(obj); // add(1, 2, 3, 4)
//   const results2 = add(args[0], args[1], args[2]);
console.log(results);
//   console.log(results2);
