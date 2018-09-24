/** Hello Express */
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Heroku changes
const port = process.env.PORT || 3000;

// Make a new express app
let app = express();

/** Advanced Templating */
// Setting up footer code so that we can extend it in each .html file
hbs.registerPartials(__dirname + '/views/partials');
/** Rendering Templates with Data*/
app.set('view_engine', 'hbs');


// Define folder with .html files
// localhost:3000/help.html now works without needing app.get since it is a static page
//app.use(express.static(__dirname + '/3-WebServersAndApplicationDeployment/public'));
app.use(express.static(__dirname + '/public'));

/** Express Middleware*/
//Registering middleware
// we use next when we are done with our operations
app.use((request, response, next) => {
    let now = new Date().toString();
    let log = `${now}: ${request.method} ${request.url}`;

    fs.appendFileSync('server.log', log + '\n');
    console.log(log);
    next();
});

// Redirects us to maintenance mode because we dont use next()
// app.use((request, response, next) => {
//     response.render('maintenance.hbs');
// });

// When we call getCurrentYear in html it will return this
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());

// Setting up a handler for http get request
// Get recives url and function
app.get('/', (request, response) => {
    // Respond to the request sending some data back
    //response.send('<h1>Hello Express</h1>');

    // Respond with JSON data
    // response.send({
    //     name: 'Ivan',
    //     likes: [
    //         'Games',
    //         'Travel',
    //         'Node'
    //     ]
    // });

    response.render('home.hbs',{
        pageTitle: 'Home Page',
        message: 'Welcome to some page!'
    })
});

// Creating second route
app.get('/about',(request, response) => {
    //response.send('About Page');

    /** Rendering Templates with Data*/
    response.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to handle request!'
    });
});

/** Adding a New Feature and Deploying*/
app.get('/projects', (request, response) => {
    response.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});

// Binds application to a port on our machine, REQUIRED
// Second argument is a function and its OPTIONAL
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
});
