var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const db = require('./config/mongoose');

// routes
const apiRoutes = require('./routes/api');

var app = express();

// MONGO SETUP
db.once('open', () => {
  console.log('connected to mongodb');
});
db.on('error', (err) => {
  console.log(err);
});

app.use(cors({ origin: 'https://annoyance.netlify.app' }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

module.exports = app;
