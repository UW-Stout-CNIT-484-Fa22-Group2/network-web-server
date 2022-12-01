const http = require('http');
const https = require('https');

const fs = require('fs');

var express = require("express");
var router = express.Router();

const helmet = require('helmet');

const webpage_root = "./frontend/build";
const credentials = {
    key: fs.readFileSync('keys/key.pem'),
    cert: fs.readFileSync('keys/cert.pem')
};

// express config here
const app = express();
app.use(helmet());
app.use("/", router);
// serve the react build
app.use(express.static(webpage_root))

// API Endpoints
router.get('/api/hello', (req, res) => {
    res.json('hello world')
})

var httpsServer = https.createServer(credentials, app);

// Redirect HTTP requests to HTTPS
var httpServer = http.createServer((req, res) => {
    console.log("Redirecting to HTTPS")
    res.writeHead(302, {
        location: "https://" + req.headers.host + req.url,
    });
    res.end()
});

httpsServer.listen(443);
httpServer.listen(80);

console.log("Server Running on http(s)://VM-WEB-01")