var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Pizza Head"
  };

setTimeout(() => {
  callback(user);
}, 3000);
};

//only position matters not var
getUser(8, (user) => {
  console.log(user);
});
