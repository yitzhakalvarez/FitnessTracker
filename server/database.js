const mysql = require('mysql');

let port = 3306;
let host =  sql9.freemysqlhosting.net;
let name = sql9374528;
let url = `mysql://${host}:${port}/${name}`;

const con = mysql.createConnection({
    host: url,
    user: name,
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });