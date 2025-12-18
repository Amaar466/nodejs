const http = require("http");


http.createServer((req, resp) => {
    resp.end("hello new world");
}).listen(8000);