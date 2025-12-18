const http = require("http");

const userData = [
    {
        name: "John Doe",
        age: 30,
        occupation: "Developer"
    },
    {
        name: "John Doe",
        age: 30,
        occupation: "Developer"
    },
    {
        name: "John Doe",
        age: 30,
        occupation: "Developer"
    },
    {
        name: "John Doe",
        age: 30,
        occupation: "Developer"
    },
    

];


http.createServer((res, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(8080);