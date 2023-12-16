// lets create our own async function in this case 
// in order to create the asynchronous function we just have to make a wrapper function around the asynchronous function and automatically we will be able to pass a callback function inside this 
// usualy whatever async functions we will write all will be written as a wrapper of JS provided async functions like setTimeout or fs.readfile for this purpose 
// the following example demonstrates the same. 
const fs = require("fs");

const badWayOfAsyncFunction = () => {
    console.log("the following code is using the bad way of creating asynchronous function \n\n");
    // the following demonstrates the ugly way of the creating the async functions 
    function ownAsyncFunction (callback) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            // here we have to call the callback function that we have taken as an argument for this purpose 
            callback(data);
        })
    }
    
    
    // defining the callback function for this purpose 
    function callback(data)
    {
        console.log("the data inside the callback function after reading the content of the files are as follows \n");
        console.log(data);
    }
    
    // here we will call out asynchronouse function 
    ownAsyncFunction(callback);

}


// now using the actual promise to write a asynchronous use of the code 

const asyncFunctionUsingPromise = () => {
    function ownAsyncFunction () {
        return new Promise (function (resolve) {
            console.log("inside the promise \n");
            fs.readFile("a.txt", "utf-8", function (err, data) {
                console.log("before resolve\n");
                // calling the callback function 
                resolve(data);
            })
        })
    }

    function onDone (data) {
        console.log("inside the call back function.\n");
        console.log(data);
    }

    console.log("the promise has been returned successfully and synchronously but it is not resolved yet\n");
    const returnedPromise = ownAsyncFunction();
    console.log("consoling the currently returned promise\n", returnedPromise);
    // calling the async function 
    // ownAsyncFunction.then(onDone);
    returnedPromise.then(onDone);
}





// calling the bad way of creating the asynchronous function for this purpose 
badWayOfAsyncFunction();
asyncFunctionUsingPromise();



// concepts of promise says that when we return the promise then synchronously we will get the promise and then we will use that returned promise value to be able to get the data if at all will be able to resolve in the future 