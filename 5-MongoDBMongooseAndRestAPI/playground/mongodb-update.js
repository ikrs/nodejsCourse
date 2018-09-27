/** Fetching Data */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // Update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bacd5149f840b0f3c47d4c2')
    // },{
    //     // update with $set
    //     $set: {
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bab8b421e9ff352916bb2fb')
    }, {
        $set: {
            name: 'Ivan'
        },
        // increment age by 1
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});

