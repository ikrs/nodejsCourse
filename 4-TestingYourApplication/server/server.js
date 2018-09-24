const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404)
        // .send('Hello World!');
        .send({
            error:'Page not found.',
            name:'Todo App v1.0'
        });
});

app.get('/users', (req,res) => {
    res.send([
        {
            name:'Vuk',
            age: 32
        },
        {
            name:'Ivan',
            age: 31
        },
        {
            name:'Branci',
            age:33
        }
    ])
});


app.listen(3000);
module.exports.app = app;