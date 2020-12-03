const express = require('express');
const names_exercises = require('../models/names_exercises');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        names_exercises.getAll().then(x=> res.send( x) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        names_exercises.getexercise(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/getexercisenames', (req, res, next) => {
        names_exercises.GetAllExerciseTypeNames().then(x=> res.send( x) )
        .catch(next);
    })

module.exports = router;