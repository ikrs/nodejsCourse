var/www/html - drwxrwxr-x  7 www-data www-data 4096 ruj  10 15:10 html


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