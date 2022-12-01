const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  console.log("Listening on https")
  res.writeHead(200);
  res.end("hello world\n");
}).listen(443);

http.createServer(function (req, res) {
    console.log("Listening on http for redirect")
    res.writeHead(302, {
        location: "https://" + req.headers.host + req.url,
    });
    res.end()
}).listen(80)


console.log("Server Running on http(s)://VM-WEB-01")