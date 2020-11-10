const express = require('express')
require('dotenv').config();

const users = require('./models/Users');

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

app.use(express.json());

app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
      req.userId = +arr[1];
  }
  next();
});

app.use('/users', users);

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})