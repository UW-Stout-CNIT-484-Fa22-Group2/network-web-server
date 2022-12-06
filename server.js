const http = require('http');
const https = require('https');
const mysql = require('mysql');
const fs = require('fs');
const bcrypt = require('bcryptjs');


var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const csurf = require('csurf');


var express = require("express");
var router = express.Router();

const helmet = require('helmet');

const webpage_root = "./frontend/build";
const credentials = {
    key: fs.readFileSync('keys/key.pem'),
    cert: fs.readFileSync('keys/cert.pem')
};
const dbConfig = {
    host: "localhost",
    user: "web-server",
    password: "Websecurity443",
    database: "cnit484-group2-schema",
};
let dbConnection = mysql.createConnection(dbConfig);

// express config here
const app = express();

// Security stuff
app.use(helmet());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csurf({
    cookie: true
}));

//app.use("/", router);
// serve the react build
app.use(express.static(webpage_root));

app.get('/getCSRFToken', (req, res) => {
    res.json({crsfToken : req.csrfToken() })
});

// API Endpoints
app.post('/api/login', (req, res) => {
    // receives a hashed password and a username
    // req.query.username and req.query.password
    let loginError = {
        code : 401,
        error : "Invalid Username or Password"
    }
    dbConnection.query(
        "SELECT * FROM users WHERE username = ?",
        [req.query.username], 
        (err, dbResult) => {
            if (err) {
                // database error
                res.send(JSON.stringify(err));
                return;
            }
            if (dbResult.length != 1) {
                // zero or many users returned
                res.send(JSON.stringify(loginError));
                return;
            }

            // only one user returned
            bcrypt.compare(req.query.password, dbResult[0].password)
            .then((validPassword) => {
                if (validPassword) {
                    // password matches, authentication success
                    res.send(JSON.stringify(
                        {
                            code : 200,
                            data : {
                                role : dbResult[0]?.role,
                                name : dbResult[0]?.displayName,
                            }
                        }
                    ));
                    return;
                }
                res.send(JSON.stringify(loginError));
            }, (err) => {
                res.send(JSON.stringify(loginError));
            });
            
        }
    );
});

app.post("/api/example", (req, res) => {

    res.send(JSON.stringify([]));
});

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