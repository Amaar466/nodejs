const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.readFile("html/web.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}).listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
