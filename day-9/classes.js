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
