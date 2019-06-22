
var http = require('http');
var fs = require('fs');
var filename = 'a.json';
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer( (req, res)=> {
console.log("Port Number : 3000");
// Change the MIME type to application/pdf
res.writeHead(200, {"Content-Type": "application/json"});
var content=fs.readFileSync(filename);
fs.appendFileSync(filename,' '+content);
console.log("ok shod");
res.end();
}).listen(3000);