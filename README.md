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






