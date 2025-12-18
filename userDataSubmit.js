const querystring = require("querystring");
const fs = require("fs");
function userDataSubmit(req, resp) {
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
        fs.writeFile("text/data2.txt", dataString, (err) => {
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

}

module.exports = userDataSubmit;
