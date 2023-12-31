require('dotenv').config();
const bcrypt = require('bcryptjs');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const cors = require('cors');

// start server using 'nodemon' command

// DEPENDENCIES TO INSTALL (to my knowledge)
// passport
// passport-local
// luxon

// PRODUCTION DEPENDENCIES (install when finished project)
// compression
// express-rate-limit
// helmet
// memorystore

var indexRouter = require('./routes/index');

var app = express();

// setting up mongoose and database connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongodb = process.env.MONGODB_URI;
if (!mongodb) {
  console.error('Error: MONGOGB_URI is not defined');
} else {
  console.log('MONGODB_URI has been successfully captured.')
}

// connect to database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongodb);
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
