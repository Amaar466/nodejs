const fs = require("fs");
const os = require("os");

fs.writeFileSync("abcd.txt", "hello world");
console.log(os.platform());
console.log(os.freemem());
console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.networkInterfaces());
console.log(os.userInfo());
console.log(os.freemem());


