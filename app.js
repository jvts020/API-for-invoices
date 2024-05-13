const express = require('express');
const app = express();

const route = require('./routes/user');

app.use((req, res, next) =>{
    res.status(200).send({
        mensagem: 'Ok'
    });
}); 

module.exports = app;