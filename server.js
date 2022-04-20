// import a "http" module
const http = require("http");

// use "http" module to create a server
// "creatServer" is a method that create a server
// we can store the server session/instance in a constant
// "const server = http.createServer();" take a call back function as an argument
// the call back function will run everytime a request come into the server
// inside the funtion "const server = http.createServer(() => {});" we get access to a request object and a response object
// when a request is made on the browser this "console.log("request made to the server");" fuction will print out to the terminal
// telling us that a request has been made to our server but the browser will not do anthing except to spin and spin because
// as of now we have nothing to response and the message is generated on the server but not being send to the browser so 
// the person watching the browser will not know what is going on or see this message
const server = http.createServer((request, response) => {
    console.log("request made to the server");
});

// from the line above the server has been created but we have to make it actively listening for request
// we do this by invoking a "listen" method
// pass in the port number argument and local host argument
// in this "server.listen(3000, "localhost", () => {})" method we have a function
// we have a fuction that fire when we start listening
server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})


// to start this server we need to run the file server.js file in the terminal
// use the command "node server"