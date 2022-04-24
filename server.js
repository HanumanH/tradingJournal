// import a "http" module
const http = require("http");
const { mainModule } = require("process");
const fs = require("fs"); // file system module

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
    // console.log("request made to the server");
    // instead of console log we want to log out the request object
    // the first time this run it will be stuck with the old file to update the file for a new run you
    // to cancel out of the sever and run (node server) the server once again
    // the request object will now load to the terminal
    // console.log(request);
    // the request object is really big with plenty of data so let's limit the data from the request object
    // it does not show localhost 3000 on the termnial it will just show "/" which is the root directory of the local host 3000
    // the method is a "get" request
    // if a request is for an "about" page than it would be shown as "/about" this is known as a "route"
    // we can manage what respond we want to send base of what "route" the request is for
    // console.log(request.url, request.method);

    // set header content type
    // the first requirement to give info of what kind of data we are responding with
    // response.setHeader("Content-Type", "text/plain");
    // we're responding to the request with just a simple plain text
    // the text will be written onto the HTML page of the client
    // response.write("hello from response");
    // response.end();

    // instead of plain text we want to send HTML
    // upon examining the client HTML page's "inspection" you'll notice that HTML's basic property was added for us i.e. header
    // response.setHeader("Content-Type", "text/html");
    // response.write("<p>hello from HTML response</p");
    // response.write("<p>hello again from HTML response from second line of response</p");
    // response.end();

    // let say that we don't want the basic property in our header and we actually want to customized it in the respond
    // response.setHeader("Content-Type", "text/html");
    // response.write("<head><link rel="stylesheet" href="#"></head>");
    // response.write("<p>hello from HTML response</p");
    // response.write("<p>hello again from HTML response from second line of response</p");
    // response.end();

    // not good to do like above
    // html should be in a separate file and node can read those file and send back
    // to do this we need to make use of the file system
    // returning HTML pages /file or documents
    // create a new folder call "views" and inside create an "index.html"
    // "index.html" is what you want to send back to the browser
    response.setHeader("Content-Type", "text/html");
    // creating path to all the html files that are inside of the views folder
    // let path = "./views";
    
    // we want to append to this dependent on the request
    // we're using the switch statement to cycle thru all possibilities
    // add as many route as your want to by adding more "case"
    let path = "./views/";
    switch(request.url) {
        case "/": // evaluate the request object; what is the case?
            path += "index.html"
            response.statusCode = 200; // everything was ok for the response status code
            break;
        case "/dashboard":
            path += "dashboard.html"
            response.statusCode = 200;
            console.log(path)
            break;
        case "/dashboardOld": // redirect old page to the new page location
            response.statusCode = 301;
            response.setHeader("Location", "/dashboard")
            response.end()
            break;
        default:
            path += "404.html";
            response.statusCode = 404;
            break;
    }

    // read the file and send the data from that file back to the browser
    // first we need to import the core module: back to the top of this page
    // if error send it to console else send the data from the index.html file
    // fs.readFile("./views/index.html", (error, data) => {
    //     if (error) {
    //         console.log(error);
    //         response.end();
    //     } else {
    //         response.write(data);
    //         response.end();
    
    // don't hardcode the path use the variable path from the top
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    });

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