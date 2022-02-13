var time = 'afternoon'; //'noon' , 'afternoon', evening, night

// if (time === 'morning') {
//   console.log('Good Morning!');
// }
// if (time === 'noon') {
//   console.log('Good Day!');
// }
// if (time === 'afternoon') {
//   console.log('Good After Noon!');
// }
// if (time === 'evening') {
//   console.log('Good Evening!');
// }
// if (time === 'night') {
//   console.log('Good Night!');
// }

switch (time) {
  case 'morning':

  case 'noon':
    console.log('Good Morning!');
    console.log('Good Day!');
    break;

  case 'afternoon':
    console.log('Good After Noon!');
    break;

  case 'evening':
    console.log('Good Evening!');
    break;

  case 'night':
    console.log('Good Night!');
    break;
  default:
    console.log('Not good day!');
}
