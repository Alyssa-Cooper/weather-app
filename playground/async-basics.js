console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000); //first arg is function, second is time in miliseconds

setTimeout(() => {
  console.log('Second timeout');
}, 0);

console.log('Finishing up');

















/*
call stack keeps track of everything, super simple DS,one thing at a time, add a top item, remove top item
async ex:
call stack: run run run, stack stack stack
node apis: setTimeOut (counts down, call stack stil going)
callback queue: callback functions ready to get FIRED (wait for empty call stack)
event loop: looks at callstack, if empty it pushes the queue
*/
