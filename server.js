// RAW, PURE, VANILLA NODE JS HTTP SERVER 

// I. Setting Up The Server
// node js comes with core modules HTTP
// HTTP can perform server request such as GET,POST,PUT, or DELETE
 
// import the HTTP module --> create a variable to store the returned HTTP instance
http = require("http");

// create a variable for the IP address 127.0.0.1
const hostname = "127.0.0.1";

// create a variable for the port to be use
const port = 3025;

// II. Create an HTTP Server
// use the createServer() method to create a server instance
// createServer() method takes a callback function as its second argument
// the callback takes the arguments: response and request
// the request object contains information about the client's request, such as a URL
// the response object returns the data requested by the client

// create a variable to hold the createServer() instance
 const server = http.createServer();
 server.on("request", (request, res) => {
     res.end("your request has been served with this line of response");
 });

//  III. The Server is Listening
// if the server connection has been established, the
// method will return true, meaning the server is now
// listening to the established connection
server.listen(port, hostname, () => {
    // note; ` is a backtick not a ' which is a single quote
    console.log(`server is actively listening on http://${hostname}:${port}/`);
});
//  IV. Testing the Server
// in the termnial run server.js --> you'll get a response message
// on a browser type in the URL: localhost:3025 --> you'll get a response message
