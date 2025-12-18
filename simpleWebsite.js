const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {




    if (req.url == "/") {
        resp.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("html/header.html", (err, headerData) => {
            if (err) {
                console.log(err);
                resp.end("Error loading header");
                return;
            }
            fs.readFile("html/home.html", (err, homeData) => {
                if (err) {
                    console.log(err);
                    resp.end("Error loading home page");
                    return;
                }
                fs.readFile("html/footer.html", (err, footerData) => {
                    if (err) {
                        console.log(err);
                        resp.end("Error loading footer");
                        return;
                    }
                    resp.write(headerData);
                    resp.write(homeData);
                    resp.write(footerData);
                    resp.end();
                })
            })
        })
    }
    else if (req.url == "/style.css") {
        resp.writeHead(200, { "Content-Type": "text/css" });
        fs.readFile("html/style.css", (err, data) => {
            if (err) {
                console.log(err);
                resp.end();
                return;
            }
            resp.write(data);
            resp.end();
        })

    }
    else {
        resp.writeHead(404, { "Content-Type": "text/html" });
        resp.end("<h1>404 Not Found</h1>");
    }

}).listen(8080);
