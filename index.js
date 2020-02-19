var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var dbConnection = require('./config/db.js');
var users = require('./routes/user.js');
var partners = require('./routes/partner.js');
var events = require('./routes/event.js');
var associations = require('./routes/association.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', users);
app.use('/partner', partners);
app.use('/event', events);
app.use('/association', associations);

// set the app to listen on the port
app.listen(3000, () => {
    console.log(`Server running on port: ${3000}`);
});

dbConnection.connect((err) => {
    if (!err) {
        console.log('db connection success');
    }
    else {
        console.log('error during connection');
    }
})

module.exports = app;