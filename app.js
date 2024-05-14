const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routeUser = require('./routes/user');
const routeUserD = require('./routes/user_details');
const routeInvoice = require('./routes/invoice');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

app.use('/user', routeUser);
app.use('/userD', routeUserD);
app.use('/invoice', routeInvoice);

app.use((req, res, next) =>{
    const error = new Error("Resource not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        error: {
            message: error.message
        }
    })
});

module.exports = app;