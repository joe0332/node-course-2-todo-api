//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
console.log ('connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5ac61e728eec7c0160891cda')
// }, {
//   $set: {
//     completed: true
//   }
// },{
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5abaf1f31b099a12f0ed0602')
  }, {
    $set: {
      name: 'Joe Money'
    },
      $inc: {
        age: 1
      }

    
  },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });



//db.close();
});
