Installing node 10 on ubuntu

        curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
        sudo apt-get install -y nodejs
        sudo apt-get install -y build-essential


Inside of the browser we have "window" global object, we have something similar in node and its called "global".
In node we also have "process" witch contains alot of information about specific node process that is being executed.

To exit cli node client we use 
        `process.exit(0);`
witch returns us to normal cli mode ( Same as hitting Ctrl + C twice ).


We can run node files in terminal with command `node app.js`.

Node docs for built in modules `https://nodejs.org/api/`
We can find alot of usefull libs on `www.npmjs.com`



# 1 - Node Fundamentals

Module is available in all of our files
Exports is object on Module property any everything on this object gets exported

In notes.js we use it to get age property in app.js and later we use it to call function.


NPM
- We use it for installing 3rd party modules ( like composer for php )

npm init - will ask us a few questions about our project and creates package.json

We will install lodash module from `https://www.npmjs.com/package/lodash`
By giving it a `--save` flag we update contents of package.json
        
        npm install lodash --save
        
        Updated package.json file
        
            "dependencies": {
                "lodash": "^4.17.10"
              }
              

Node_modules contains generated code. Should not be shared, changed or pushed to git.


NODEMON - `https://www.npmjs.com/package/nodemon`
- it automatically restarts our application when we make changes
- it is CLI utility, new way of starting our applications

-g = global

        npm install nodemon -g
        
Now we start application with `nodemon app.js` command and it will automatically restart our application when we save changes
Shut down nodemon with `Ctrl + c`


Getting User Input

`process.argv` - get all arguments passed in terminal command, ex. `node app.js -v` we will get `-v`


Simplified Input using Yargs

yargs - https://www.npmjs.com/package/yargs
- helps us build interactive CLI tools by parsing arguments and generating an elegant user interface
- to make sure we have same version as in course we add version number during installation

        npm install yargs@4.7.1
        
        
Working with JSON

JSON.stringify() = converts object to string
JSON.parse = converts string to object


Debugging Node Applications

Running inspect wont run our application.
`node inpect debugging.js`

While in debug mode we can use

- `list(11)` to see 11 lines above and 11 lines below
- `n` - short for next, move on to next statement
- `c` - continue until our program completes
- `repl` - access application as it currently stands

We can go few lines inside our code with `n` and then enter `repl`. If we enter our code before we define person.name=Mike and hit "person" inside `repl` we will get current value (Ivan)

We can use `debugger;` inside our code witch creates special line break to get to specific part of your program easy. Now we can hit `c` to get to that part of a program.

We can debug with nodemon also `nodemon inspect app.js read --title=secret`. On each save inspect will rerun.



Debugging vie Chrome Dev Tools

Type `node --inspeck-brk app.js` then in your browser go to chrome://inspect -> Open dedicated DevTools for Node

Sources tab is most usefull.
Options -> Show console drawer to show console tab inside sources tab.

We can also use nodemon - `nodemon --inspect-brk app.js`


Listing Notes

`allNotes.forEach()` is similar to `.filter`.
`.filter()` lets you manipulate array by returning true or false to keep items or remove items.
`.forEach()` calls callback function once for each item in array


Requiring Arguments and Advanced Yargs

We added --help command, description to each command and required fields.
Check app.js for more info.


Arrow functions


Arrow functions DOES NOT BIND `.this` keyword.



# Asynchronous Node Weather App


Async Basics

`setTimeout()` is a great method for illustrating basics of non-blocking programming


Callback functions & APIs

Callback function is function that gets passed as an argument to another function and it gets executed after some event

        Here we are sending function console.log() to function setTimeout() that 
        will execute after 2000 ms witch represents event
        
        setTimeout(() => {
            console.log('callback') 
        }, 2000)
        
        
Request : `https://www.npmjs.com/package/request`

Due to changes to Google Maps api I use different url then in course.

`http://www.mapquestapi.com/geocoding/v1/address?key=5FaLATH8xpsKmyy7uMLg9lTGUFXpQcoL&location=65%20srebrnjak%20zagreb`


Pretty Printing Objects

Print whole object with `console.log(JSON.stringify(body, undefined, 2));`


Encoding User Input

`encodeURIComponent()` changes spaces for %20 
`decodeURIComponent()` changes %20 to spaces


Intro to ES6 Promises

Promises solve alot of problems that come up when you have a lot of async code.

Promise takes function as a argument. In order to actually do something when Promise 
gets resolved or rejected we need to call Promise method called "then".

Difference from callback and Promise is that in callback we have one function that fires 
no matter what and the arguments let us know if things went well.
In Promises we are going to have 2 functions and that is going to determine if things 
went wrong or not.


First function will get called only if our promise gets resolved, otherwise second 
function will get called that will handle rejection

        somePromise.then((message) => {
            console.log(`Success : ${message}`);
        }, (errorMessage) => {
            console.log(`Error : ${errorMessage}`);
        });

`.catch` method is similar to `.then`, but it takes just one function and that is an error handler. It is 
very usefull when chaining Promises.



# Web Servers and Application Deployment

Hello Express

`expressjs.com` - site dedicated to express module for Node

We start the server with `nodemon server.js` and we can visit localhost:3000 to see if it works.


Rendering Template with Data

`http://handlebarsjs.com/` - allows us to build templates 

`https://www.npmjs.com/package/hbs` - npm page for handlebars module



Setting Up GitHub & SSH Keys

`https://help.github.com/categories/authenticating-to-github/` - Everything related to GitHub SSH Keys



Deploy Your Apps

Deploying on Heroku, we need to download Heroku CLI tool at `toolbelt.heroku.com`.

 - Login to Heroku over CLI : `heroku login`
 
 - `heroku keys:add` adds first key it finds in SSH folder
 
 - `ssh -v get@heroku.com` testing if everything works
 
 - `heroku create`
 
 - `git push heroku` - push & build on heroku
 
 - `heroku open` - go to url
 
 
 
 # Testing Your Application
 
 
 Mocha and Basic Testing
 
 `https://mochajs.org/`
 
 Save dev will save this package for development use only, we dont need it on 
 Heroku we just need it locally
 `npm i mocha --save-dev`
 
 In package.json under "test" we use `"test": "mocha **/*.test.js"`, it tells mocha to 
 look in every folder for a file ending in test.js.
 
 
 `it()` is a function provided by mocha and we use it for testing
 
        it('should add two numbers', () => {
            let result = utils.add(33,11);
        
            if (result !== 44) {
                throw new Error(`Expected 44, but got ${result}`);
            }
        });
        
        

Watch and Auto Restart Tests


`nodemon --exec 'npm test'` - exec tels nodemon that given command might not be node command
 We can also move that command to package.json like this `"test_watch": "nodemon --exec 'npm test'"` and 
 now we can use `npm run test-watch`
 
 
 
 Using an Assertion Library
 
 
 `https://github.com/mjackson/expect` - Assertion library
 `npm i expect@1.20.2 --save-dev`
 
 
 
 Testing Asynchronous Code
 
 
When we put done as a argument then mocha knows we have async code.We also have 
to call done() after assertions.



Testing Express Application

We will use `supertest` library along side mocha to test `express`

`https://www.npmjs.com/package/supertest`

`npm i supertest --save-dev`



Organizing Tests with describe()

`describe()` alows us to group and sort our tests

We define it and just move all of the tests inside describe function



Test Spies

Spies let us swap out real functions for a testing utility. Spies come build with expect library
and we create a spy with `expect.createSpy()`, that method will return a function witch we will 
swap out with real method.

For example, we need to test a call to `saveUser` but we dont want to save test user to database, 
so we use spy to see if function was called with correct arguments.


Rewire lets us swap out variables for our tests.
`npm i rewire --save-dev`
Rewire works in a way that we use `rewire` instead of `require` when we are loading a file 
that we want to mock up.
Rewire also adds 2 methods, `.__set__` and `__get__`.

        let db = {
                saveUser: expect.createSpy()
            };
        app.__set__('db',db);
        
  
Here we replace db with spy and we tell that when testing app.js we want to swap 
real `'db'` with spy `db`



# MongoDB, Mongoose and REST APIs

`mongodb.com` - select community server
`http://mongodb.github.io/node-mongodb-native/3.1/api/index.html` - mongodb methods

After download rename it to mongodb and put it in Documents folder, also 
in Documents create another folder mongo-data/nodeCourse folder.


Go to mongodb/bin and run `./mongod --dbpath ~Documents/mongo-data/nodeCourse`, i used path `/home/ikrsnik/Documents/mongo-data/nodeCourse`
because I could not set it any other way
This command will start database server and we need to define path to database 
file location.

Open new terminal tab and from mongodb/bin run `./mongo`, this will connect 
us to database server we just started. 

To test that database is working we will create new table

        > db.Todos.insert({text:'Film new node course'})
        WriteResult({ "nInserted" : 1 }) // 1 new record was created
        
        db.Todos.find() // find every single item in Todos collection
        { "_id" : ObjectId("5bab4b8b7afd2c6b893940ec"), "text" : "Film new node course" }
        
      
Now we can shut down `./mongo` tab since everything is working fine. 

`robomango.org` - GUI for managing mongo database

Download robomongo (Robo 3T) and move to Documents folder.
Go inside robo3t/bin and run/double click `robo3t` icon.

We need to create a connection for a local mongodb database so that we can connect 
to ir and manipulate data.
    
        Connection Settings
        
        Type: Direct Connection
        Name: Node Course
        Address: localhost : 27017
        Save
        
Now we can see our Todos table in test/Collections



Build a NoSQL Vocabulary

SQL                     NoSQL
Table           =       Collection
Row/Record      =       Document
Column          =       Does not have Columns because of JSON format



Connecting to Mongo and Writing Data

Node MongoDB Native - `https://github.com/mongodb/node-mongodb-native`
`npm i mongodb --save`

To connect to any give database we use

        const MongoClient = require('mongodb').MongoClient;
        
        // Connecting to mongodb
        // TodoApp will automatically be created WHEN we start adding data into it
        MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
        
            if (error) {
                return console.log('Unable to connect to MongoDB Server');
            }
        
            console.log('Connected to MongoDB Server');
        
            // Close the connection to MongoDB Server
            client.close();
        });
        
Save data in collection

        // .collection - Argument is string name of a collection we want to insert in to
        // .insertOne - object to save in MongoDB, callback function
        db.collection('Todos').insertOne({
                text: 'Something to do',
                completed: false
        }, (error, result) => {
            if (error) {
                return console.log('Unable to insert Todo : ', error);
            }
            // result.ops contains all the documents that were inserted
            console.log(JSON.stringify(result.ops, undefined, 2));
        });    
        
 
 
The ObjectId    

 
MongoDB id is NOT autoincrement id, but is randomly generated.
It is a 12 byte value : 
    
    First 4 bytes : timestamp (so we dont need createdAt field)
    Next 3 bytes : machine identifyer
    Next 2 bytes : process id
    Next 3 byte : counter
 
Printing id info : 

    console.log(result.ops[0]._id);
    console.log(result.ops[0]._id.getTimestamp());
    

Object descructuring - lets us pull out the properties from an object creating 
variables, in this case we grab name from user object

    let user = {name:'Ivan',age:32};
    let {name} = user;   
    
Using Object descructoring on mongodb object

    const {MongoClient, ObjectID} = require('mongodb');
    
    // Creating new ObjectId
    let obj = new ObjectID();
    
    

Fetching Data 
    
We use .find() for fetching data
    
    // .toArray returns a Promise so we can add .then call after
    // find all todos that are not completed - .find({completed:false})....
    // find by id - .find({_id: new ObjectID('57abb814c1b824944d5f508e')}).....
    db.collection('Todos').find({
        completed:false
    }).toArray().then((documents) => {

        console.log('Todos');
        console.log(JSON.stringify(documents, undefined,2));

    }, (error) => {
        console.log('Unable to fetch todos : ', error);
    });
    
    
Counting documents `db.collection('Todos').find().count().then((count) => {.....})` 



Deleting Documents

Most used methods are

- deleteMany()

- deleteOne()

- findOneAndDelete()



Updating Data

Most used method is `.findOneAndUpdate(filter, update, options, callback)`.

MongoDB Update Operators - `https://docs.mongodb.com/manual/reference/operator/update/`

Example : 

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
        
        
Setting Up Mongoose

`https://mongoosejs.com`

`npm i mongoose@4.5.9 --save`
        
        - We tell mongoose we want to use built in Promise library instead of some 3rd party one
        mongoose.Promise = global.Promise;
        
        -Connect to database
        mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

         Responsible for saving
        .save returns a promise
        
        newTodo.save().then((doc) => {
            console.log('Saved Todo ', doc);
        }, (e) => {
            console.log('Unable to save Todo');
        });
        
        
        
Validators, Types and Defaults

`https://mongoosejs.com/docs/validation.html`
`https://mongoosejs.com/docs/guide.html`

    let User = mongoose.model('User', {
        email: {
            type: String,
            // VALIDATION BELOW
            required: true,
            trim: true,
            minlength: 1
        }
    });


Installing Postman

- Postman is essential tool when we are building API.
`https://www.getpostman.com/`
Me : Looks like better version of Insomnia


Resource Creating Endpoint - POST /todos

`npm i body-parser@1.15.2 --save` - BodyParses is letting us send JSON to server

- Run `server.js`
- Go to Postman, set method to POST, url `localhost:3000/todos`, Body -> raw ->JSON
    
    
    In Postman text area write
    {
    	text:"This is from postman"
    }

Hit send and in console you should see message `{ text: 'This is from postman' }
`
    
    
Testing POST /todos

Creating tests/server.test.js.

We will use testing lifecycle method that will run in between each 
test wiping all todos from database.


    beforeEach((done) => {
        Todo.remove({}).then(() => done());
    });
    
    


List Resources - GET /todos

Postman Info :
- Put in method and url
- Save downarrow -> Save As 
- Create Collection (ex TodoApp)
- Select created collection and Save
- In the left menu, under Collections, we have saved methods/urls