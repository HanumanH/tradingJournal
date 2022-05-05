// RAW, PURE, VANILLA NODE JS HTTP SERVER 

// I. Setting Up The Server
// node js comes with core modules HTTP
// HTTP can perform server request such as GET,POST,PUT, or DELETE
 
// import the HTTP module --> create a variable to store the returned HTTP instance
const http = require("http");

// import the FS module --> create a variable to store the returned FS instance
const fs = require("fs");

// import the PATH module --> create a variable to store the returned PATH instance
const path = require("path");

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
 const server = http.createServer(function (request, response) {
    // logging the request URL and fixing it if it does not specify a file
    // i.e., if the URL sent is paesino.com, it will be interpreted as paesino.com/index.html
    console.log('request ', request.url); // print to console the file being requested by client
    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './htmls/index.html';
    }
    // if request is /style.css, it will be interpreted as 
    if (filePath == './style.css') {
        filePath = './public/stylesheets/style.css';
    }
    // if request is /script.js, it will be interpreted as 
    if (filePath == './script.js') {
        filePath = './public/javascripts/script.js';
    }
    // if request is /loginPageBackground.jpg, it will be interpreted as 
    if (filePath == './loginPageBackground.jpg') {
        filePath = './images/loginPageBackground.jpg';
    }
    // change to string to lowercase --> look for the extension of the file being requested
    // to see if it matches with one of our MIME types;
    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    // if no match found we use the application/octet-stream as the default type
    var contentType = mimeTypes[extname] || 'application/octet-stream';
    // respond to the client with the file information
    // this function reads the file using our previously prepared filePath variable
    fs.readFile(filePath, function(error, content) {
        // compensate for any possible errors
        if (error) {
            // most often, the error will be ENOENT, in which case we reply with a 404 error
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        // if there are no errors, we send over the requested file
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
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
