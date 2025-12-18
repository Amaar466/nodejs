const http = require("http");

const userForm = require("./userForm");
const userDataSubmit = require("./userDataSubmit");

http.createServer((req, resp) => {
    if (req.url == "/") {
        userForm(req, resp);
    }
    else if (req.url == "/submit") {
        userDataSubmit(req, resp);
    }
    else {
        resp.end("404 Not Found");
    }
}).listen(5000);
