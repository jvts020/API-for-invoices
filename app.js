const express = require('express');
const app = express();

const routeUser = require('./routes/user');
const routeUserD = require('./routes/user_details');
const routeInvoice = require('./routes/invoice');

app.use('/user', routeUser);
app.use('/userD', routeUserD);
app.use('/invoice', routeInvoice);

app.use((req, res, next) =>{
    res.status(200).send({
        Status: 'localhost Ok'
    });
}); 

module.exports = app;