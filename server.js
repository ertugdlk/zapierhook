let express = require('express');
let server = express();

let bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log("running rest api on port " + port);
});

server.get( '/' , (req,res) => res.send('You can reach API from /api'));

let router = require("./route.js");
server.use('/api' , router);


module.exports = server;

