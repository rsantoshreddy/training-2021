//  contructor method: new ClassName()
let value;
value = new Date();
// console.log('today>>>>\n', value);

value = new Date('1-2-2021');
value = new Date('January 28 2022');
// value = new Date('1-2-2021');
console.log(value.setDate(30));

console.log(value);
console.log(value.getMonth()); //0
console.log(value.getDate()); //28
console.log(value.getDay()); //5

console.log(value.getFullYear()); //2009
console.log(value.getHours());
console.log(value.getMinutes());
console.log(value.getSeconds());
console.log('getMilliseconds', value.getMilliseconds());
console.log('getTime', value.getTime() / 1000); //1970

// jan - 0;
// feb - 1;
// march - 2;
// aprl - 3;
// may - 4;
// june - 5;
// july - 6;
// august - 7;
// september - 8;
// october - 9;
// November - 10;
// december - 11;

// sun - 0;
// mon - 1;
// tue - 2;
// wed - 3;
// thus - 4;
// fri - 5;
// sat - 6;

console.log(value.setMonth(2));
console.log(value);

console.log(value.setFullYear(1988));
console.log(value.setHours(3));
console.log(value.setMinutes(30));
console.log(value.setSeconds(23));
