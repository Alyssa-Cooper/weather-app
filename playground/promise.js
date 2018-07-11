var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    else {
      reject('Args must be numbers');
    }
  }, 1500);
  });
};

asyncAdd(5,7).then((res) => {
  console.log ('Result: ', res);
  return asyncAdd(res, 33);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log(`Should be 45`, res);
}, (errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey, it worked!');
//     reject('Unable to fulfill promise!');
//   }, 2500);
//
// });

//return result from constructor function for promises
//resolve, reject callbacks
// only pass one thing to resolve, one thing to reject
// then promise method provides callback functions for resolve and reject
// you can only resolve or reject a promise once

// somePromise.then((message) => {
//   console.log(`Success: `, message);
// }, (errorMessage) => {
//   console.log(`Error:`, errorMessage);
// });
