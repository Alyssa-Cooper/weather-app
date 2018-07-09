console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000); //first arg is function, second is time in miliseconds

setTimeout(() => {
  console.log('Second timeout');
}, 0);

console.log('Finishing up');
