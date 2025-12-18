const http = require("http");
const age=26;
http.createServer((res, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.write(
        `
        <html>
        <head><title>My First Page</title></head>
        <body>
        <h1>Hello from my Node.js server!</h1>
        <h2>My age is ${age}</h2>
        </body>
        </html>
        `
    );
    resp.end();
}).listen(8181);