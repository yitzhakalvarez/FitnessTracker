const express = require('express');
const exercisetypes = require('../models/exercisetypes');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        exercisetypes.getAll().then(x=> res.send( x) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        exercisetypes.getexercise(id).then(x=> res.send( x ) )
        .catch(next);
    })

module.exports = router;