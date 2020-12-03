const express = require('express');
const users = require('../models/users');

const router = express.Router();

router
    .get('/AllFriends/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        users.getUserFriends(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/friendslist', (req, res, next) => {
        users.getFriendlist(req.body.Owner_id).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .post('/add_Friend', (req, res, next) => {
        users.Add_A_New_Friend(
            req.body.Friends_id,
            req.body.Owner_id, 
            ).then(newUser => {
            res.send( newUser );
        }).catch(next)
            
    })
    .post('/delete_Friend', (req, res, next) => {
        users.RemoveFriend(
            req.body.Owner_id, 
            req.body.Friends_id).then(newUser => {
                res.send( newUser );
            }).catch(next)
    });

module.exports = router;