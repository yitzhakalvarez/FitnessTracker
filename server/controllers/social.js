const express = require('express');
const followers = require('../models/followers');
const router = express.Router();

router
    .get('/users/:id/followers', (req, res, next) => {
        const id = +req.params.id;
        if (!id) {
            return next();
        }
        followers.getFollowersForUser(id).then(result => res.send(result))
            .catch(next);
    })


module.exports = router;