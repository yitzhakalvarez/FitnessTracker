const express = require('express');
const path = require('path');
require('dotenv').config();

console.log('At least some code is running');

const users = require('./controllers/users');
const exercises = require('./controllers/exercises');
const comments = require('./controllers/comments');
const exercisetypes = require('./controllers/exercisetypes');
const friendlist = require('./controllers/Friendlist');
const reactions = require('./controllers/reactions');


const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

//  Middleware
app.use(express.json());
app.use(express.static( __dirname + '/../docs/'))
app.use('/public', express.static( __dirname + '/public/')) //dunno what i'mma do with this
 //creates a middleware function that will serve files straight off computer and tells computer where to look.
//it was looking for a file in the wrong folder. The dirname is the directory name
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//  Authentication
app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
      req.userId = +arr[1];
  }
  next();
});
//  API
app.get('/hello', (req, res, next) => {
  res.send('Hello Hudson Valley!! You requested ' + req.url)
})

app.use('/users', users);
app.use('/comments', comments);
app.use('/exercises', exercises);
app.use('/exercisetypes', exercisetypes);
app.use('/friendlist', friendlist);
app.use('/reactions', reactions);

app.get('*', (req, res, next) => {
    const filename = path.join(__dirname, '/../docs/index.html');
    console.log(filename);
    res.sendFile( filename );
})

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )



//  Init
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})