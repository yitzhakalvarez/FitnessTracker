const mysql = require('mysql');

let port = 3306;
let host =  sql3.freemysqlhosting.net;
let name = sql3376190;
let url = `mysql://${host}:${port}/${name}`;

const con = mysql.createConnection({
    host: url,
    user: name,
    password: "wwdDGiWF4h"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });