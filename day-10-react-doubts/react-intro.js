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
