// this is for the async await concepts 
// we will take the same example for async await 
// we will have the same code example to understand the beatuy of the async await for this purpose 
const fs = require("fs");
const asyncFunctionUsingPromise = async () => {
    function ownAsyncFunction () {
        return new Promise (function (resolve) {
            console.log("inside the promise \n");
            fs.readFile("a.txt", "utf-8", function (err, data) {
                console.log("before resolve\n");
                setTimeout(() => {
                    resolve(data);
                }, 3000);
                
            })
        })
    }

    const responseData = await ownAsyncFunction();
    console.log("the response from the above function is \n", responseData);


}

asyncFunctionUsingPromise();
console.log("after the function calling. Last Statement of the code \n");


// async await is still using asynchronous concept. It is acting as the syntactic sugar for writing the promise 
