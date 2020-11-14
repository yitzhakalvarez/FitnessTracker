require('dotenv').config();
const express = require('express');
const users = require('./controllers/users');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})