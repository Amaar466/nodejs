const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http.createServer((req, resp) => {
    fs.readFile("html/form.html", (err, data) => {
        if (err) {
            resp.writeHead(404, { 'Content-Type': 'text/plan' });
            resp.write("404 Not Found");
        }
        if (req.url == "/") {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
        }
        else if (req.url == "/submit") {
            // resp.writeHead(200, { 'Content-Type': 'text/html' });
            let bodyData = [];
            req.on("data", (chunk) => {
                bodyData.push(chunk);
            })
            req.on("end", () => {
                bodyData = Buffer.concat(bodyData);
                bodyData = bodyData.toString();
                const parsedData = querystring.parse(bodyData);
                console.log(parsedData);
                let dataString = "My name is " + parsedData.name + " and my email is " + parsedData.email;
                // fs.writeFileSync("text/data.txt", dataString);
                // resp.write(dataString);
                fs.writeFile("text/data1.txt", dataString, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {

                        console.log("Data written successfully");
                    }
                })
                resp.write(dataString);
                resp.end();
            })
            return;
        }

        resp.end();
    })

}).listen(8080);
// const url = require("inspector");

// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'text/html' });
//     if (req.url == "/") {
//         resp.write(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <title>Bootstrap Form</title>

//         <!-- Bootstrap 5 CSS -->
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
//     </head>
//     <body class="bg-light">

//         <div class="container mt-5">
//             <div class="row justify-content-center">
//                 <div class="col-md-6">
//                     <div class="card shadow">
//                         <div class="card-body">
//                             <h4 class="mb-3 text-center">Contact Form</h4>

//                             <form action="/submit" method="post">
//                                 <div class="mb-3">
//                                     <label class="form-label">Name</label>
//                                     <input type="text" name="name" class="form-control">
//                                 </div>

//                                 <div class="mb-3">
//                                     <label class="form-label">Email</label>
//                                     <input type="email" name="email" class="form-control">
//                                 </div>

//                                 <button class="btn btn-primary w-100">Submit</button>
//                             </form>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <!-- Bootstrap 5 JS (Optional) -->
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
//     </body>
//     </html>
//     `);
//     }
//     else if (req.url == "/submit") {
//         resp.write("<h1>Form Submitted</h1>");
//     }
//     else {
//         resp.write("<h1>404 Not Found</h1>");
//     }


//     resp.end();
// }).listen(8080);

console.log("Server running at http://localhost:8080");
