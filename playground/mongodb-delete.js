//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
console.log ('connected to MongoDB server');

// deleteMany

// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });


// deleteOne

// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });


// db.collection('Users').deleteMany({name: 'Joe'}).then((result) => {
//   console.log(result);
// });



db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5ac404deaa87502ad8a0facf')
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});


//db.close();
});
