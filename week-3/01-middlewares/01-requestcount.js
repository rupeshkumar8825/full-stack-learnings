const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable




// few concepts about the middleware can be found here 
// MIDDLEWARES 
  // This is nothing but we have some prechecks. In real world we do have mainly two types of the health checkups 
  // 1. authentication checks whether the request is coming from the correct or not 
  // 2. user input where the input of the users is correct format or not 
  // To check above things we can use middleware so that we can remove the bad requests without letting that particular request to enter the api's main logic 

  // now we want to have the global exception then we can make this using the global middleware the global middlewares can be defined in the node js and we can tell the nodejs to use this global exception using the app.use(middleware_name).


  // ZOD ==> zod is the library using which we can make the schema for input validation and it will return the appropriate message saying that the user has not sent the input data using the proper format. 

  // hence we can make different formats using the input validation and then using these schema we can validate the schemas for this purpose and finally return appropriate messages to the end user. 



console.log("the starting value of the request count is \n". requestCount);

// making the global middleware which will run everytime the api end points is hit 
const requestCountMiddleware = (req, res, next) => {
  console.log("inside the request count function \n");
  // here we have to increment the value 
  requestCount++;

  console.log("the new value of the requestCount is \n", requestCount);
  // here we have to call the next function 
  next();
}



// telling the express to use the global middleware 
app.use(requestCountMiddleware);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;