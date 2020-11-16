//Required Modules
const express = require('express');
const app = express();

//app.use settings
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../dist/"));


/*
    Required For App
*/
//Methods for App
const controller = require('./app/controller');
app.use('/app', controller);

const port = 81;

//Server Stuff (Local Production)
//const server = "localhost";
//Server Stuff (Hosting)
const server = "198.168.1.4";

//Port listen and message
app.listen(port);
// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);