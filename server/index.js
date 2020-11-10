const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/register.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})