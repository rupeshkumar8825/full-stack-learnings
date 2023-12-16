// lets create our own async function in this case 
// in order to create the asynchronous function we just have to make a wrapper function around the asynchronous function and automatically we will be able to pass a callback function inside this 
const fs = require("fs");


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


