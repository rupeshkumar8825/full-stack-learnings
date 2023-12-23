const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint


// here we have to add the new middleware which will track the error for this purpose 
// this function takes 4 arguments instead of the 3 like others
const globalExceptionHandler = (err, req, res, next) => {
  // if some error occurs then the control will come to this middleware/ itself 
  errorCount = errorCount + 1;

  // console.log("the error that we have got is \n", err);
  // here we have to return bad response 
  res.status(404).send("some error occurrend on the server");
  // here we have to call next
}



app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// using the global excpetion handler 
app.use(globalExceptionHandler);

module.exports = app;