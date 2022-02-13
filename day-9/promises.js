// setTimeout(function () {
//   console.log('test');
// }, 1000);

// console.log('tst2');

// var a = 0;
// const set = setInterval(function () {
//   console.log(a++);
// }, 1000);

// setTimeout(function () {
//   console.log('clear interval');
//   clearInterval(set);
// }, 5000);

function getRes() {
  // const prom = fetch('https://reqres.in/api/users?page=2');
  // prom
  //   .then(function (res) {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     return (data);
  //   });
}

// console.log(prom);

const getData1 = function () {
  console.log('getData1');
  fetch('https://reqres.in/api/users?page=2')
    .then(function (res) {
      console.log('getData1 Then');
      return res.json();
    })
    .then(function (data) {
      console.log('getData1 Then2');
      return data;
    });

  return 'finish';
};

const getData2 = async function () {
  console.log('getData2');
  const data = await fetch('https://reqres.in/api/users?page=2');
  const actualValue = await data.json();
  console.log(actualValue);
  return data;
};

console.log(getData1());
console.log(getData2());
