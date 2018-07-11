var somePromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey, it worked!');
    reject('Unable to fulfill promise!');
  }, 2500);

});

//return result from constructor function for promises
//resolve, reject callbacks
// only pass one thing to resolve, one thing to reject
// then promise method provides callback functions for resolve and reject
// you can only resolve or reject a promise once
somePromise.then((message) => {
  console.log(`Success: `, message);
}, (errorMessage) => {
  console.log(`Error:`, errorMessage);
});
