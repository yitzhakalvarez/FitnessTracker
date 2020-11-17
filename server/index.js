require('dotenv').config();
const express = require('express');
const path = require('path');
const users = require('./controllers/users');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(users);

//app.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname + '/signup.html'));
//});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})