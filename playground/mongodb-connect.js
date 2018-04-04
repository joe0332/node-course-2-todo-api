//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
console.log ('connected to MongoDB server');

// db.collection('Todos').insertOne({
//   text: 'something to do',
//   completed: false
//   }, (err, result) => {
//     if (err){
//       return console.log('unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//
// db.collection('Users').insertOne({
//    name: 'Joe',
//    age: 30,
//    location: '25 West 74th Street, NY, Moon'
//    }, (err, result) => {
//      if (err){
//        return console.log('unable to update user collection test', err);
//      }
//      console.log(result.ops[0]._id.getTimestamp());
//    });



db.close();
});
