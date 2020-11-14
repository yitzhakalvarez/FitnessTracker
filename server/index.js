const express = require('express');
const path = require('path');
require('dotenv').config();

const users = require('./controllers/users');

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

//  Middleware
app.use(express.json());
app.use(express.static( __dirname + '/../docs/'))



//Init
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})